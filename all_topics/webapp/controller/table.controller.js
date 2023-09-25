sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "alltopics/model/formatter",
    "alltopics/model/models",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/FilterType"
], function(
	Controller,
	formatter,
	models,
	Filter,
	FilterOperator,
	FilterType) {
	"use strict";

	return Controller.extend("alltopics.controller.table", {
        formatter: formatter,
        /**
         * @override
         */
        onInit: function() {
            var oData1 = models.createJSONModel("model/Projects.json");
            this.getView().setModel(oData1, "PJ");
            
           
        },
        onLiveSearch: function (oEvent) {
            var aFilters = [];
				// var sQuery = oEvent.getSource().getValue();
				var sQuery = oEvent.getParameter("newValue");
				if (sQuery && sQuery.length > 0) {
					var filter1 = new Filter({
                        filters: [
                            new Filter("name", FilterOperator.Contains, sQuery),
                            new Filter("description", FilterOperator.Contains, sQuery)
                          ],
                          and: false
                    });
					aFilters.push(filter1);
                  
				}
	
				// update list binding
				var oList = this.byId("table");
				var oBinding = oList.getBinding("items");
				oBinding.filter(aFilters,FilterType.Application);

        }
	});
});