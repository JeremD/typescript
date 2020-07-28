console.log("Meteo App");

/**
 * Météo
 */
class Meteo {
    constructor(private _ville: string, private _temperature: number) {
    }

    // Affichage de la température de la ville
    toString(): string {
        return `${this._ville} - ${this._temperature}°C`;
    }

}

let nantesCeMatin = new Meteo('Nantes', 12);

console.log(nantesCeMatin.toString());