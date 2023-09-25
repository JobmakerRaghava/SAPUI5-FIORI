sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "comboboxselectbox/model/models",
    "comboboxselectbox/model/formatter",
    "sap/ui/model/odata/v2/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, models, formatter,ODataModel) {
        "use strict";

        return Controller.extend("comboboxselectbox.controller.Main", {
          //  formatter: formatter,

            onInit: function () {
                var oData = models.createJSONModel("model/country.json");
                this.getView().setModel(oData);

                var oModel = new ODataModel("http://services.odata.org/Northwind/Northwind.svc/");
            },

            onCaps: function (oName) {
                 return oName.toUpperCase();
            }
        });

    });
