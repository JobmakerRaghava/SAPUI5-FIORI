sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller , MessageToast , JSONModel) {
        "use strict";

        return Controller.extend("bindingtechniques.controller.Bind", {
            // onInit: function () {

            // },
            onPress: function () {
                //Without model setting the data to the screen field
                this.getView().byId("n1").setValue("Sudharshan");

                // setting the data to the screen field with model
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
                //Technique 1. set the value at view level ->input id=n2

                //Techinque 2. set the value at view level -> input id=n3

                // Technique 3. set the value at controller level         
                var oTechnique3 = this.getView().byId("n4");
                oTechnique3.bindValue("/Details/mobile");

                // Technique 4. set the value at controller level         
                var oTechnique4 = this.getView().byId("n5");
                oTechnique4.bindProperty("value", "/Details/mail");

                MessageToast.show("Data got fetched", {
                    at: "center center"
                });
            }
        });
    });
