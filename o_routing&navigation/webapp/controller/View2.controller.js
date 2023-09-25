sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("resoucemodel.controller.View2", {


            onInit: function () {
                var a = this.byId("form2");
                a.addStyleClass("text");

                var b = this.byId("button1");
                b.addStyleClass("button");

                var c = this.byId("t2");
                c.addStyleClass("text2");


                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("RouteView2").attachMatched(this.onRouteMatched, this);
            },

            onRouteMatched: function (oEvent) {
                var oArg = oEvent.getParameter("arguments").index;
                var sPath = "/stu/" + oArg;
                this.getView().bindElement(sPath);

            },

            onPress: function (oEvent) {
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            },
            

        });
    });
