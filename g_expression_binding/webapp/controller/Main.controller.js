sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "jsonmodel/model/models"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel, oModel) {
        "use strict";

        return Controller.extend("jsonmodel.controller.Main", {
            // onInit: function () {

            // },
            onPress: function () {
                var oData = oModel.createJSONModel();
                oData.setDefaultBindingMode("OneWay");
                this.getView().setModel(oData);


                MessageToast.show("Data got fetched", {
                    at: "center center"
                });

            },
            onDis: function () {
                var oTechnique4 = this.getView().byId("n2");
                oTechnique4.bindProperty("editable", "{= ${/Details/surname} === 'Juta' ? true : false}");
                var A = this.getView().getModel();
                console.log(A);
            },
        });
    });
