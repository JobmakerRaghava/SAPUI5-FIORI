/*global QUnit*/

sap.ui.define([
	"binding_techniques/controller/Bind.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Bind Controller");

	QUnit.test("I should test the Bind controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
