sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/NumberFormat"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, NumberFormat) {
        "use strict";

        return Controller.extend("costcalculator.controller.CostCalculator", {
            onInit: function () {

            },
            onUpdateSchaetzung: function() {
                // Lese werte aus der Oberfläche
                const iFamilenMitglieder = this.byId("slider1").getValue();
                const sStromtariff = this.byId("comboBox1").getSelectedKey();

                // Definiere, wie viel ein Haushalt mit n Personen braucht
                const personen2verbrauch = {
                    "1": 1000,
                    "2": 1800,
                    "3": 2700,
                    "4": 3600,
                    "5": 4400
                };

                // Lese auf Basis des Slider wertes den Vebrauch für diese Personenanzahl
                const vebrauchProJahr = personen2verbrauch[iFamilenMitglieder.toString()];

                // Setzte in der Oberfläche den Monatsverbrauch
                this.byId("stromverbrauch").setText(vebrauchProJahr);
                
                // Setze die Daten aus den Tariffen
                const strompreis = {
                    basispreisProJahr: 0.0,
                    arbeitspreisProKwH: 0.0
                };
                if(sStromtariff === "swm_mflex") {
                    strompreis.basispreisProJahr = 154.11;
                    strompreis.arbeitspreisProKwH = 0.5522;
                } else if(klickenergie_KlickStrom === "klickenergie_KlickStrom") {
                    strompreis.basispreisProJahr = 120.11;
                    strompreis.arbeitspreisProKwH = 0.33;
                }

                var oFormat = NumberFormat.getCurrencyInstance();
                
                const formattedPreis = oFormat.format((strompreis.basispreisProJahr+(strompreis.arbeitspreisProKwH*vebrauchProJahr)));
                this.byId("preis").setText(formattedPreis+" €");
            }
        });
    });
