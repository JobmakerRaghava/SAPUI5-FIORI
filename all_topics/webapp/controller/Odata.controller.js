sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/FilterType",
	"sap/ui/model/json/JSONModel"
], function (
	Controller,
	Filter,
	FilterOperator,
	FilterType,
	JSONModel
) {
	"use strict";

	return Controller.extend("alltopics.controller.Odata", {
		/**
		 * @override
		 */
		onInit: function () {


		},
		itemPress: function (oEvent) {
			var oSource = oEvent.getSource().getBindingContext("Odata"),
			
				oIdorder = oSource.getProperty("ProductID"),
				oRouter = this.getOwnerComponent().getRouter();

			oRouter.navTo("ProductDetails", { id: oIdorder });
			// MessageToast.show("this is from itempress");
		},
		onLiveSearch: function (oEvent) {
			var oValue = oEvent.getSource().getValue(),
			oTable = this.getView().byId("table2"),
			oBindings = oTable.getBinding("items"),
			aFilters = [];
			var ofilter2 = new Filter("OrderID", FilterOperator.Contains, oValue);
			aFilters.push(ofilter2);
			oBindings.filter(aFilters,"Application");

		}
	});
});