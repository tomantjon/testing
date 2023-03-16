/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"hogent/helloworld-g/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
