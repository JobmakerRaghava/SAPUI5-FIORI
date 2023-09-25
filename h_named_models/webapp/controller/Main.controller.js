sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "z08namedmodels/model/models"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, models) {
        "use strict";

        return Controller.extend("z08namedmodels.controller.Main", {
            onInit: function () {
                // var oModel = models.createJSONModel("model/name.json");
                // this.getView().setModel(oModel);

                // var oModel = models.createJSONModel("model/id.json");
                // this.getView().setModel(oModel , "Id");

                // var oModel = models.createJSONModel("model/age.json");
                // this.getView().setModel(oModel , "Age");

            }
        });
    });
