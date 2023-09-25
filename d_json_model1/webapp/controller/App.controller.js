sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/BindingMode"
],
    function (Controller, JSONModel , BindingMode) {
        "use strict";

        return Controller.extend("ns.raghava.controller.App", {
            onInit: function () {
        /*************this inline binding */
                // this.getView().byId("in").setValue("Raghava");

                /*******************this one way binding */
                // var oData =  {
                //     "name": "sap ui5"
                // };
    
                // // var oMedal = new JSONModel(oData);
                // var oMedal = new sap.ui.model.json.JSONModel(oData);

                // this.getView().setModel(oMedal);
/*******************this another way binding , all are two way bindingmode*/
                var oData = new JSONModel( {
                    "name": "sap ui5",
                    "active": true
                });
            
                this.getView().setModel(oData);

            },

            onClick : function(){
                
                // this.getView().getModel("viewModel").setProperty("/bEnableUpdate", false);
                //  this.getView().getModel("oData").setProperty("/active" , false);
              

            }

        });
    });
