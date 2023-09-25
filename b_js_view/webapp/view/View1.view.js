sap.ui.jsview("jsview.view.View1", {
    getControllerName: function () {
        return "jsview.controller.App"
    },

createContent: function(oController){
    var oBt1 = new sap.m.Button("idBt1",{
        text:"SAVE",
        icon:"sap-icon://save",
        type:"Accept"
    });

    var oBt2 = new sap.m.Button("idBt2",{
        text:"DELETE",
        icon:"sap-icon://delete" 
    });

    return [oBt1 , oBt2];
}

});