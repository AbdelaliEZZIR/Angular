import { Article } from "./article";
import { Utilisateur } from "./utilisateur";

export class Lignecmd {
    id : number;
    code: string;
    dateCommande : Date = new Date();
    articleDtos : Article = new Article();
    utilisateurDto :Utilisateur = new Utilisateur();

    constructor(){
        this.id = 0;
        this.code = "";        
      }
}


