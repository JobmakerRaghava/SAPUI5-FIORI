sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("pfragmets.controller.View1", {
            onInit: function () {

            },
            onClick: function(){
                var oRouter = this.getOwnerComponent().getRouter().navTo("RouteView2");
            }
        });
    });
