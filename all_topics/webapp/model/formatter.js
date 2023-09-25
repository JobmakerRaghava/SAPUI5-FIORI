sap.ui.define([

], function () {
    'use strict';
    return {
        status: function (sValue) {
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch (sValue) {
                case "Completed":
                    return resourceBundle.getText("C");
                case "Pending":
                    return resourceBundle.getText("P");
                default:
                   return sValue;
            }
        },

        icon: function (sIcon) {
            switch (sIcon) {
                case "Completed":
                    return "sap-icon://complete";
                case "Pending":
                    return "sap-icon://process";
                default:
                   return sIcon;
            }
        }
    }
});