import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Authentification} from '../Classe/authentification';
import { Utilisateur } from '../Classe/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpClient: HttpClient) { }

  connection(auth:Authentification ): Observable<Authentification>{
    return this.httpClient.post<Authentification>("http://localhost:8080/gestiondesachats/authenticate/authenticate",auth);
  }

  getUtilisateur(auth:any): Observable<Utilisateur>{
    let tokenStr =  `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
      return this.httpClient.get<Utilisateur>("http://localhost:8080/gestiondesachats/utilisateur/find/"+auth,{headers});
      
  }

  creer(utlisateur:Utilisateur ): Observable<Authentification>{
    let tokenStr =  `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    console.log(headers)
    return this.httpClient.post<Utilisateur>("http://localhost:8080/gestiondesachats/utilisateur/create",utlisateur,{headers});
  }


}
