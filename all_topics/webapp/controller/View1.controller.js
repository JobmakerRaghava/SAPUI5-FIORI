sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("alltopics.controller.View1", {

            onInit: function () {
                // var that = this;
                this.byId("page").addStyleClass("pageBG");
                this.getView().byId("signin").setVisible(false);
                // this.getView().byId("signup").setVisible(false);
            },
            onliveChange: function (oEvent) {
                var oValue = oEvent.getParameter("value"),
                    oLength = oValue.length;
                if (oLength >= 5) {
                    this.getView().byId("signin").setVisible(true);
                    // this.getView().byId("signup").setVisible(true);
                }
                else {
                    this.getView().byId("signin").setVisible(false);
                    // this.getView().byId("signup").setVisible(false);
                }
            },
            onPress: function (oEvent) {
                var oUser = this.getView().byId("userid").getValue(),
                    oPass = this.getView().byId("password").getValue();

                if (oUser === 'Raghava' && oPass == 12345) {
                    MessageToast.show("Login Success");
                    this.getOwnerComponent().getRouter().navTo("HomePage");
                }
                else if (oUser === "")
                    MessageToast.show("Enter UserId");

                else if (oPass === "")
                    MessageToast.show("Enter Password");

                else
                    MessageToast.show("Enter the Currect Details");

            }
        });
    });
