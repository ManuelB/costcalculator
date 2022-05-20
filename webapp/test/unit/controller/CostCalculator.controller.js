/*global QUnit*/

sap.ui.define([
	"costcalculator/controller/CostCalculator.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CostCalculator Controller");

	QUnit.test("I should test the CostCalculator controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
