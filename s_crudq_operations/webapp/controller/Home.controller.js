sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/date/UI5Date"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
        Dialog,
        JSONModel,
        MessageToast,
        UI5Date) {
        "use strict";

        return Controller.extend("crudqoperations.controller.Home", {

            onInit: function () {
                this.onReadData();

            },
            onReadData: function () {
                var oDataModel = this.getOwnerComponent().getModel(),
                    oJsonModel = new JSONModel(),
                    // oUrl = new sap.ui.model.odata.v2.ODataModel("https://services.odata.org/V2/(S(xzyacee3aje5cqhyu4e32qqv))/OData/OData.svc"),
                    that = this,
                    oBusyDialog = new sap.m.BusyDialog({
                        title: "Loading data",
                        text: "Please wait...",
                        customIcon: "./css/load.png"
                    });
                oBusyDialog.open();
                oDataModel.read("/Products", {
                    success: function (odata) {
                        oJsonModel.setData(odata);
                        that.getView().setModel(oJsonModel, "CRUD");
                        oBusyDialog.close();
                    },
                    Error: function (error) {
                        oBusyDialog.close();
                    }
                })

            },
            onAddRecord: function () {
                if (!this.oDialog1) {
                    this.oDialog1 = this.loadFragment({
                        name: "crudqoperations.view.addRecord"
                    });
                }
                var oId, that = this;
                var oDataModel2 = this.getOwnerComponent().getModel();
                oDataModel2.read("/Products/$count", {
                    success: function (odata) {
                        // oId=odata.results.length;
                        that.byId("idInput1").setValue(odata);
                        that.byId("idInput2").setValue("");
                        that.byId("idInput3").setValue("");
                        that.byId("idInput4").setValue(UI5Date.getInstance());
                        that.byId("idInput5").setValue("");
                        that.byId("idInput6").setValue("");
                    },
                    Error: function (error) {
                        debugger;
                    }
                });
                this.oDialog1.then(function (oDialog2) {
                    oDialog2.getAggregation("buttons")[0].setVisible(true);
                    oDialog2.getAggregation("buttons")[1].setVisible(false);
                    oDialog2.setTitle("Creating Record");


                    oDialog2.open();
                });
            },
            onClose: function (oEvent) {
                this.byId("idDialog").close();

            },
            onDelete: function (oEvent) {
                var that = this,
                    oModel = this.getOwnerComponent().getModel();
                oModel.setUseBatch(false);
                var oId = oEvent.getSource().getBindingContext("CRUD").getProperty("ID");
                oModel.remove("/Products(" + oId + ")", {
                    success: function (odata) {
                        that.onReadData();
                    },
                    error: function (oError) {
                        console.log(oError);
                    }
                })
            },
            onCreate: function (oEvent) {
                // var oButtonText = oEvent.getSource();
                var that = this,
                    oModel = this.getOwnerComponent().getModel();
                oModel.setUseBatch(false);
                var oRecordData = {
                    "ID": oEvent.getSource().getParent().getContent()[1].getValue(),
                    "Name": oEvent.getSource().getParent().getContent()[3].getValue(),
                    "Description": oEvent.getSource().getParent().getContent()[5].getValue(),
                    "ReleaseDate": oEvent.getSource().getParent().getContent()[7].getValue(),
                    "DiscontinuedDate": null,
                    "Rating": oEvent.getSource().getParent().getContent()[9].getValue(),
                    "Price": oEvent.getSource().getParent().getContent()[11].getValue(),
                };
                oModel.create("/Products", oRecordData, {
                    success: function (odata) {
                        that.onReadData();
                        that.byId("idDialog").close();
                        MessageToast.show("Record is created");
                    },
                    error: function (oError) {
                        that.byId("idDialog").close();
                    }
                })
            },
            onEdit: function (oEvent) {
                if (!this.oDialog1) {
                    this.oDialog1 = this.loadFragment({
                        name: "crudqoperations.view.addRecord"
                    });

                }

                var oSelected = oEvent.getSource().getBindingContext("CRUD").getObject();
                this.oDialog1.then(function (oDialog22) {
                    oDialog22.getAggregation("buttons")[0].setVisible(false);
                    oDialog22.getAggregation("buttons")[1].setVisible(true);
                    oDialog22.setTitle("Editing Record");
                    oDialog22.getAggregation("content")[1].setValue(oSelected.ID);
                    oDialog22.getAggregation("content")[3].setValue(oSelected.Name);
                    oDialog22.getAggregation("content")[5].setValue(oSelected.Description);
                    oDialog22.getAggregation("content")[7].setValue(oSelected.ReleaseDate);
                    // this.byId("idInput4").setDisplayFormat("yyyy-MM-dd-HH-mm-s");
                    oDialog22.getAggregation("content")[9].setValue(oSelected.Rating);
                    oDialog22.getAggregation("content")[11].setValue(oSelected.Price);
                    oDialog22.getAggregation("content")[1].setEditable(false);
                    oDialog22.open();

                });



            },
            onUpdate: function (oEvent) {
                var that = this,
                    oId = oEvent.getSource().getParent().getContent()[1].getValue(),
                    oModel = this.getOwnerComponent().getModel();
                oModel.setUseBatch(false);
                var oRecordData = {

                    "Name": oEvent.getSource().getParent().getContent()[3].getValue(),
                    "Description": oEvent.getSource().getParent().getContent()[5].getValue(),
                    "ReleaseDate": oEvent.getSource().getParent().getContent()[7].getValue(),
                    "DiscontinuedDate": null,
                    "Rating": oEvent.getSource().getParent().getContent()[9].getValue(),
                    "Price": oEvent.getSource().getParent().getContent()[11].getValue(),
                };
                oModel.update("/Products(" + oId + ")", oRecordData, {
                    success: function (odata) {
                        that.onReadData();
                        that.byId("idDialog").close();
                        MessageToast.show("Record is updated");
                    },
                    error: function (oError) {
                        console.log(oError);
                        that.byId("idDialog").close();
                    }
                })
            }
        });
    });
