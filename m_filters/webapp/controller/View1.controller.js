sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("filters.controller.View1", {
            onInit: function () {

            },
            onLive: function (oEvent) {
                var oValue = oEvent.getSource().getValue(); //use this or (this is specially for livechange event)
            //    var oValue = oEvent.getParameter("query"); // this
                
               var oListdata = this.byId("idLi");

                var aFilters = [];
                var ofilter = new Filter("name", FilterOperator.Contains, oValue);
                aFilters.push(ofilter);

                var oBind = oListdata.getBinding("items");
                oBind.filter(aFilters, "Application");


            },
            onSearch: function (oEvent) {
                // var oValue2 = oEvent.getSource().getValue(); //use this or (this is specially for livechange event)
               var oValue = oEvent.getParameter("query"); // this
                
               var oListdata2 = this.byId("idLi2");

                var aFilters2 = [];
                var ofilter2 = new Filter("name", FilterOperator.Contains, oValue);
                aFilters2.push(ofilter2);

                var oBind2 = oListdata2.getBinding("items");
                oBind2.filter(aFilters2, "Application");


            },

            onDelete: function (oEvent) {
                var oList = oEvent.getSource(),
                    oSelectedItem = oEvent.getParameter("listItem");

                    oList.removeItem(oSelectedItem);
            },

            onPress: function () {
                var oApp = this.getView().getParent();
                oApp.to("App");
            }
        });
    });
