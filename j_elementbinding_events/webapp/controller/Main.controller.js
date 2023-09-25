sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "itablecontrol/model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, models) {
        "use strict";

        return Controller.extend("itablecontrol.controller.Main", {
            onInit: function () {
                var oData = models.createJSONModel("model/student.json");
                this.getView().setModel(oData);
            },

            onRowSelection: function (oEvent) {
                
                var oRow = oEvent.getParameter("rowContext");
                var oPath = oRow.getPath();
                var oForm = this.getView().byId("form");
                oForm.bindElement(oPath);
            }
        });
    });
