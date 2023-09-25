sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "itablecontrol/model/models",
    "itablecontrol/utils/formatter",

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, models, formatter) {
        "use strict";

        return Controller.extend("itablecontrol.controller.Main", {

            onInit: function () {
                var oData = models.createJSONModel("model/student.json");
                this.getView().setModel(oData);

            },
            onPress: function () {

                // var oRows = oView._getTotalRowCount();
                // oRows += 1;
                // var oRow = new sap.ui.table.Row("idRow", {
                //     cells: [new sap.m.Button({
                //         icon: "sap-icon://delete",
                //         type: "Reject"
                //     }),
                //     new sap.m.Input(),
                //     new sap.m.Input(),
                //     new sap.m.Input({
                //         showValueHelp: true
                //     })
                //     ]
                // });
                // oView.insertRow(oRow, oRows);
                var oCol = new sap.ui.table.Column("idcol", {
                    name: "New column",
                    label: new sap.m.Label("idL", { text: "Label" })
                });
                var oView22 = this.getView().byId("table");
                // oView22.addColumn(oCol);

                oView22.getAggregation("columns").push(oCol)
                // oView22.insertColumn(oCol, "11");
                debugger;
            },
            // toCaps: function (oName) {
            //     //return oName.toLowerCase();   
            //     return oName.toUpperCase();
            // },
            formatter: formatter,



            /////////////////////////////////////


        });
    });
