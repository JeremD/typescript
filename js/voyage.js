"use strict";
/**
 * Séjour
 */
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        /**
         * Get nom
         */
        get: function () {
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        /**
         * Get prix
         */
        get: function () {
            return this._prix;
        },
        enumerable: false,
        configurable: true
    });
    return Sejour;
}());
/**
 * Service de séjour
 */
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejour = [];
        this._sejour.push(new Sejour("Visite de Paris", 500));
        this._sejour.push(new Sejour("Voyage à Rio", 800));
    }
    // Rechercher un séjour
    SejourService.prototype.findByName = function (name) {
        for (var _i = 0, _a = this._sejour; _i < _a.length; _i++) {
            var sejour = _a[_i];
            if (sejour.nom === name) {
                return sejour;
            }
            return ("Pas de s\u00E9jour \u00E0 " + name);
        }
    };
    return SejourService;
}());
// Recherche de séjour à Paris
var viewSejour = new SejourService();
console.log(viewSejour.findByName("Visite de Paris7"));
