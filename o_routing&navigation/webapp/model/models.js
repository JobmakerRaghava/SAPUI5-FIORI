sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device",
    "sap/ui/model/resource/ResourceModel"
], 
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel, Device , ResourceModel) {
        "use strict";

        return {
            createDeviceModel: function () {
                var oModel = new JSONModel(Device);
                oModel.setDefaultBindingMode("OneWay");
                return oModel;
        },
        // createJSONModel: function (sPath) {
        //     var oJson = new JSONModel();
        //     oJson.loadData(sPath);
        //     return oJson;
        // },
        // createResourceModel: function () {
        //     var oResource = new ResourceModel({
        //        bundleUrl : "i18n/i18n.properties"
              
        //     });
        //     return oResource;

        // }
    };
});