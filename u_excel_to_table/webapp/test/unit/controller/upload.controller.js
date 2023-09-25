/*global QUnit*/

sap.ui.define([
	"u_excel_to_table/controller/upload.controller"
], function (Controller) {
	"use strict";

	QUnit.module("upload Controller");

	QUnit.test("I should test the upload controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
