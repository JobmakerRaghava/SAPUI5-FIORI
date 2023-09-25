/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"n_tiles/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
