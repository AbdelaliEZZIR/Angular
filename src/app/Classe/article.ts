import { Categorie } from "./categorie";
import { Utilisateur } from "./utilisateur";

export class Article {
    id : number;
    code: string;
    nom: string;
    photo : Blob = new Blob();
    description: string;
    prix: number;
    utilisateurDto : Utilisateur = new Utilisateur();
    categorieDto :Categorie = new Categorie();
  
    constructor(){
      this.id = 0;
      this.code = "";
      this.nom = "";
      this.description = "";
      this.prix = 0;
    }
}
