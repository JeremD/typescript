"use strict";
console.log("Meteo App");
/**
 * Météo
 */
var Meteo = /** @class */ (function () {
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    /**
     * Affichage de la température
     */
    Meteo.prototype.toString = function () {
        return this._ville + " - " + this._temperature + "\u00B0C";
    };
    return Meteo;
}());
var nantesCeMatin = new Meteo('Nantes', 12);
console.log(nantesCeMatin.toString());
