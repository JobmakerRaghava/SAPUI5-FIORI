sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "resoucemodel/model/models",


],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, models, ) {
        "use strict";

        return Controller.extend("resoucemodel.controller.View1", {

            onInit: function () {
                // var oData = models.createJSONModel("model/student.json");
                // this.getView().setModel(oData);

                // var oRes = models.createResourceModel();
                // this.getView().setModel(oRes , "i18n");
            },
            onRowSelect: function (oEvent) {
                // var oApp = this.getView().getParent();
                // oApp.to("View2");

                var oRouter = this.getOwnerComponent().getRouter();


                var oCon = oEvent.getParameter("rowContext");
                var oName = oCon.getProperty("Name");
                var oPath = oCon.getPath().split("/")[2];



                oRouter.navTo("RouteView2", {
                    name: oName,
                    index: oPath
                });
            }

        });
    });
