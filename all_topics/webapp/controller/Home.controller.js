sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",

    "alltopics/model/models",
    "sap/ui/model/type/DateTime",
    "sap/m/MessageToast"

], function (Controller, JSONModel, models, DateTime, MessageToast) {
    'use strict';

    return Controller.extend("alltopics.controller.Home", {

        onInit: function () {
            // setTimeout(() => {
            //    
            //     this.byId("dynamic").setBusy(false);
                
            // }, 5000);
           
            //********adding count one way********************************************
            // var oModel = new JSONModel();
            // oModel.setData({
            //     odatacount: 0,
            //     prjcount: 0
            // });
            // this.getView().setModel(oModel, "viewModel");

            // var oViewModel = this.getView().getModel("viewModel");
            // var oDataModel = this.getOwnerComponent().getModel("Odata");

            // oDataModel.read("/Order_Details/$count", {

            //     success: function (oData) {
            //         oViewModel.setProperty("/odatacount", oData);

            //     }
            // });

            //***********second way to add count ***********************************************
            var oDataModel = this.getOwnerComponent().getModel("Odata");
            that = this;
            oDataModel.read("/Order_Details/$count", {

                success: function (oData) {
                    that.getView().byId("odata").setCount(oData);
                    that.byId("dynamic").setBusy(false);

                }
            });

            var oData1 = models.createJSONModel("model/Projects.json");
            this.getView().setModel(oData1, "PJ");
            // oData1.getProperty("/prj/length");

            //  this.byId("shell").addStyleClass("homeshell");


            // var oViz = this.getView().byId("viz1");
            // var oData2 = models.createJSONModel("model/Vizframe.json");
            // oViz.setModel(oData2, "Viz");

            // adding css class for title bold
            this.byId("title").addStyleClass("hometitle");
            this.byId("label").addStyleClass("homesubtitle");

            // this for count the records in the tables
            //    var oTable = this.getView().byId("table2"),
            //     oItemsBinding = oTable.getBinding("items"), 
            //    oItemsLength = oItemsBinding.getLength();


            // adding data and time 
            var oLabel = this.getView().byId("date1");
            var result = this.GetClock();
            oLabel.setText(result);
            var that = this;
            setInterval(function () {
                var result = that.GetClock();
                oLabel.setText(result);
            }, 1000);

            // var oTable = this.getView().byId("table2");
        },

        GetClock: function () {

            var tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
            var tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
            var d = new Date();
            var nday = d.getDay(),
                nmonth = d.getMonth(),
                ndate = d.getDate(),
                nyear = d.getYear(),
                nhour = d.getHours(),
                nmin = d.getMinutes(),
                nsec = d.getSeconds(),
                ap;
            if (nhour === 0) {
                ap = " AM";
                nhour = 12;
            } else if (nhour < 12) {
                ap = " AM";
            } else if (nhour == 12) {
                ap = " PM";
            } else if (nhour > 12) {
                ap = " PM";
                nhour -= 12;
            }
            if (nyear < 1000) nyear += 1900;
            if (nmin <= 9) nmin = "0" + nmin;
            if (nsec <= 9) nsec = "0" + nsec;
            var result = " " + tday[nday] + ", " + tmonth[nmonth] + " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + ap;
            return result;

        }





        // onAfterRendering:function () {
        // this for count the records in the tables
        //    var oTable = this.getView().byId("table2"),
        //     oItemsBinding = oTable.getBinding("items"),
        //    oItemsLength = oItemsBinding.getLength();
        // },

        // onBeforeRendering: function() {
        //     var oTable = this.getView().byId("table2"),
        //     oItemsBinding = oTable.getBinding("items"),
        //    oItemsLength = oItemsBinding.getLength();
        // },

        // OnRecords:function () {
        //     var oTable = this.getView().byId("table2"),
        //     oItemsBinding = oTable.getBinding("items"),
        //    oItemsLength = oItemsBinding.getLength();
        //    this.getView().byId("odata").setCount(oItemsLength);



        //    oTable = this.getView().byId("table"),
        //     oItemsBinding = oTable.getBinding("items"),
        //    oItemsLength = oItemsBinding.getLength();
        //    this.getView().byId("icon").setCount(oItemsLength);
        // }


    })
});