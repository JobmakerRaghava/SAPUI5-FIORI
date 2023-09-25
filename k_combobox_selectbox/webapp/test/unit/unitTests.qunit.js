/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"combobox_selectbox/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
