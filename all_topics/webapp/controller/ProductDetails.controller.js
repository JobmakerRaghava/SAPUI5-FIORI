sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller, History) {
    'use strict';
    return Controller.extend("alltopics.controller.ProductDetails", {
        onInit: function () {
            debugger;
            // this.byId("page").setBusy(true);
            // setTimeout(() => {
            //     this.byId("page").setBusy(false);
            // }, 2000);

            this.getOwnerComponent().getRouter().getRoute("ProductDetails").attachPatternMatched(this.onRouteMatched, this);
        },
        onRouteMatched: function (oEvent) {
            var oView = this.getView();
            var ProductId = oEvent.getParameter("arguments").id;
            this.getView().bindElement({
                path: "/Products(" + ProductId + ")", model : "Odata",
                events: {
                //     dataRequested: function () {
                //         oView.setBusy(true);
                //     },
                    dataReceived: function () {
                        oView.byId("page").setBusy(false);
                    }
                }
            });
        },
        onNav: function () {
            var sPreviousHash = History.getInstance().getPreviousHash();

            if (sPreviousHash !== undefined) {
                history.go(-1);
              
            } else {
                // There is no history!
                // Naviate to master page
                this.getOwnerComponent().getRouter().navTo("Home", {}, true);

            }

        },
        /**
         * @override
         */
        onExit: function() {
            debugger;
        
        }

    })
});