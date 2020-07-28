/**
 * Séjour
 */
class Sejour {
    constructor(private _nom: string, private _prix: number) {
    }

    /**
     * Get nom
     */
    public get nom(): string {
        return this._nom;
    }

    /**
     * Get prix
     */
    public get prix(): number {
        return this._prix;
    }

    /**
     * Affichage du séjour
    */ 
    public toString() : string {
        return `${this._nom} - ${this._prix}€`;
    }

}

/**
 * Service de séjour
 */
class SejourService {
    private _sejour: Sejour[] = [];
    constructor() {
        this._sejour.push(new Sejour("Paris", 500));
        this._sejour.push(new Sejour("Rio", 800));
    }

    // Rechercher un séjour
    public findByName(name: string): Sejour | string {
        for (const sejour of this._sejour) {
            if (sejour.nom === name) {
                return sejour;
            }

            return (`Pas de séjour à ${name}`);
        }
    }
}

// Recherche de séjour à Paris
const viewSejour = new SejourService();
console.log(viewSejour.findByName("Paris").toString());