/*global XLSX*/
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("uexceltotable.controller.upload", {

            onInit: function () {
                this.localModel = new sap.ui.model.json.JSONModel();
                this.getView().setModel(this.localModel, "localModel");
            },
            onUpload: function (e) {
                this._import(e.getParameter("files") && e.getParameter("files")[0]);
                // url for xlsx library
                // https://cdnjs.com/libraries/xlsx
            },

            _import: function (file) {
                var that = this;
                var excelData = {};
                if (file && window.FileReader) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var data = e.target.result;
                        // read data from excel sheet
                        var workbook = XLSX.read(data, {
                            type: 'binary'
                        });
                        // get the all worksheet names
                        workbook.SheetNames.forEach(function (sheetName) {
                            // Here is your object for every sheet in workbook
                            excelData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                            //excelData contains only last sheet data,
                            //if we want all the sheet data specify sheet name
                        });
                        // Setting the data to the local model 
                        that.localModel.setData({
                            items: excelData
                        });
                        that.localModel.refresh(true);
                    };
                    reader.onerror = function (ex) {
                        console.log(ex);
                    };
                    reader.readAsBinaryString(file);
                }
            },
            onDownload: function (oEvent) {
                var rows = [];
                var selection = this.getView().byId("idItemsTable").getSelectedItems();
                selection.forEach(val =>{
                    var data = val.getBindingContext("localModel").getObject();
                    rows.push(data);
                });

                const worksheet = XLSX.utils.json_to_sheet(rows);
                const workbook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, "Employee");
                XLSX.writeFile(workbook, "down_ui.xlsx", { compression: true });
            }

        });
    });
