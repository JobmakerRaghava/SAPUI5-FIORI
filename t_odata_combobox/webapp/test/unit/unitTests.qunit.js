/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"t_odata_combobox/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
