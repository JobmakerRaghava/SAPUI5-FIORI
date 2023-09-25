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
            onClick: function () {
                // var oApp = this.getView().getParent();
                // oApp.to("View2");

                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2");


            }

        });
    });
