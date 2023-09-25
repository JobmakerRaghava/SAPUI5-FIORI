sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ntiles.controller.View1", {
            onInit: function () {

            },
            onChange: function (oEvent) {
                var oValue = oEvent.getParameter("value");
                this.byId("p1").setWidth(oValue + "%");
                this.byId("p2").setWidth(oValue + "%");
            }
        });
    });
