import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../Classe/article';
import { UtilisateurService } from '../Service/utilisateur.service';
import {Authentification} from '../Classe/authentification';
import { SavePhoto } from '../Classe/save-photo';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private utilisateurService :UtilisateurService ,private httpClient: HttpClient) {}
  
  auth :Authentification = new Authentification();
 



  

  getArticleEtat(): Observable<Article[]>{ 

    var etat = "EnAttend" ; 

    let tokenStr =  `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<Article[]>("http://localhost:8080/gestiondesachats/article/findEtat/"+etat ,{headers});
  }

  getArticle(): Observable<Article[]>{  
    
    let tokenStr =  `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<Article[]>("http://localhost:8080/gestiondesachats/article/findAll" ,{headers} );
  }

  addArticle(newArticle: Article): Observable<Article>{
    let tokenStr =  `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.post<Article>("http://localhost:8080/gestiondesachats/article/create",newArticle ,{headers});
  }

  savePhoto(savephoto : SavePhoto): Observable<Article>{
    let tokenStr =  `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.post<Article>("http://localhost:8080/gestiondesachats/article/savePhoto",savephoto,{headers});
  }

  removeArticle(id: number) {
    let tokenStr =  `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.delete<Article>("http://localhost:8080/gestiondestock/v1/article/delete/"+id ,{headers});
  }

  updateArticle(articleEdit: Article): Observable<Article>{
    let tokenStr =  `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.post<Article>("http://localhost:8080/gestiondestock/v1/article/update",articleEdit ,{headers});
  }
  
}
