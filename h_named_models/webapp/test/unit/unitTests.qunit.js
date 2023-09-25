/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"z_08_named_models/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
