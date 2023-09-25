sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast) {
        "use strict";

        return Controller.extend("practice.controller.App", {
            onInit: function () {
                var oData = new JSONModel({
                    "type": "flight",
                    "name": "RAghava",
                    "title": "Dropdown button"
                });
                this.getView().setModel(oData);
                //    sap.ui.getCore().setModel(oData, "data");

            },
            onError: function (oEvent) {
                const oRegex = /^\+91\d{10}$/;
                var oText = oEvent.getParameter("value");

                if (oText.match(oRegex)) {
                    MessageToast.show("valid");
                } else {
                    MessageToast.show("Enter numbers");
                }

            }
        });
    });
