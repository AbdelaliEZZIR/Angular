import { Component, OnInit } from '@angular/core';
import {Authentification} from '../Classe/authentification';
import { UtilisateurService } from '../Service/utilisateur.service';
import { ArticleService } from '../Service/article.service';
import { Article } from '../Classe/article';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from '../Classe/utilisateur';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {


  auth :Authentification = new Authentification();
  art : Article = new Article();  
  constructor(private utilisateurService :UtilisateurService , private articleService :ArticleService  , private router: Router  ) { }

  ngOnInit(): void {
  }
  
    connection(){ 
      
    this.utilisateurService.connection(this.auth).subscribe((response:any) =>  {  
      sessionStorage.setItem('token',response.access);
        console.log(this.auth.email)
      this.utilisateurService.getUtilisateur(this.auth.email).subscribe((res:Utilisateur) =>  {      
          sessionStorage.setItem('id',JSON.stringify(res.id));
          sessionStorage.setItem('utilisateur',JSON.stringify(res))
      })
      this.router.navigate(['/article']);
    })
  }
}
