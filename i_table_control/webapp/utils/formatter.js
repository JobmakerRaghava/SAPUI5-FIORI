sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function (NumberFormat) {
    'use strict';
    return {
        toCaps: function (oName) {
            //return oName.toLowerCase();   
            // var oFormat = NumberFormat.getIntegerInstance({
            //     "groupingEnabled": true,  // grouping is enabled
            //     "groupingSeparator": '-', // grouping separator is '.'
            //     "groupingSize": 1        // the amount of digits to be grouped (here: thousand)
            // });

            // oFormat.format(oName);  
            // return oFormat;
            // var oCap = oName.toUpperCase();
            // return oCap;
            var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            switch (oName) {
                case "eligible":
                    return resourceBundle.getText("E");
                case "noteligible":
                    return resourceBundle.getText("NE");
                default:
                    return oName
            }
        }

    }


});