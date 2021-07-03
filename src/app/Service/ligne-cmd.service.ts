
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Lignecmd } from '../Classe/lignecmd';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LigneCmdService {

  constructor(private httpClient: HttpClient) { }

  getLesAcats(): Observable<Lignecmd[]>{
     let auth= sessionStorage.getItem('id');
    console.log("auth : "+auth)
    console.log("session : "+sessionStorage.getItem('id'))
    let tokenStr =  `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
      return this.httpClient.get<Lignecmd[]>("http://localhost:8080/gestiondesachats/ligneCommande/findUtlisateur/"+auth,{headers});
      
  }

  create( lignecmd:Lignecmd): Observable<Lignecmd>{
    let tokenStr =  `Bearer ${sessionStorage.getItem('token')}`;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.post<Lignecmd>("http://localhost:8080/gestiondesachats/ligneCommande/create",lignecmd,{headers});  
  }
}
