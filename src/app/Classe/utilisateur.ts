import { Article } from "./article";
import { Lignecmd } from "./lignecmd";

export class Utilisateur {

    id : number;
    nom: string;
    prenom: string;
    email: string;
    adresse: string;
    tel: string;
    motDePasse: string;
    articles :Article[] = [];
    ligneCommandeDtos : Lignecmd [] =[];

    constructor(){
      this.id = 0;
      this.nom = "";
      this.prenom = "";
      this.email  = "";
      this.tel  = "";
      this.motDePasse  = "";
      this.adresse  = "";
    }
}
