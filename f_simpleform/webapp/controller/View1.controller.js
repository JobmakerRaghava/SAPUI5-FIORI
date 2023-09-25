sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("simpleform.controller.View1", {
            onInit: function () {
                var oData = new JSONModel({
                    "Details":
                    {
                        "name": "Sudharshan",
                        "surname": "Juta",
                        "id": "JS01",
                        "mobile": "420-420-00",
                        "mail": "juta@sudharshan.com"
                    }
                });
                this.getView().setModel(oData);
                
            },
            onPress: function () {
                this.getView().byId("n1").setValue("Raghavendra");
                this.getView().byId("n2").setValue("Kolanu");
                this.getView().byId("n3").setValue("LR99");
                this.getView().byId("n4").setValue("8096355086");
                this.getView().byId("n5").setValue("raghavakolanu@yahoo.com");
                MessageToast.show("Data got fetched", {
                    at: "center center"
                })
            }
        });
    });
