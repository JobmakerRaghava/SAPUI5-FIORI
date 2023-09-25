sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "pfragmets/model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, models) {
        "use strict";
        var oValue;
        return Controller.extend("pfragmets.controller.View1", {
            onInit: function () {

            },
            onClick: function () {
                var oRouter = this.getOwnerComponent().getRouter().navTo("RouteView1");
            },
            frag: function () {
                var oData = models.createJSONModel("model/country.json");
                this.getView().setModel(oData);

                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "pfragmets.view.Dialouge"
                    });
                }

                this.pDialog.then(function (oDialog) {
                    oDialog.open();
                });
            },

            onSelect: function (oEvents) {
                var oSource = oEvents.getParameter("selectedItem");
                oValue = oSource.getText();
               
                
            },
            onOk: function () {
                this.getView().byId("idInput").setValue(oValue);
                this.byId("helloDialog").close();
            },
            onCloseDialog: function () {
                // note: We don't need to chain to the pDialog promise, since this event-handler
                // is only called from within the loaded dialog itself.
                this.byId("helloDialog").close();
            }
        });
    });
