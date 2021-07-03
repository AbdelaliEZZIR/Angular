import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categorie} from '../Classe/categorie';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private httpClient: HttpClient) { }

  getCategorie(): Observable<Categorie[]>{

    let tokenStr =  `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<Categorie[]>("http://localhost:8080/gestiondesachats/categorie/findAll",{headers});
  }
}
