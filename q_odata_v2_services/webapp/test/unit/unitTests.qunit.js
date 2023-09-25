/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"qodatav2services/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});