/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"r_odata_v2services/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
