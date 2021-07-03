import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../Classe/utilisateur';
import { UtilisateurService } from '../Service/utilisateur.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  newUtilisateur: Utilisateur= new Utilisateur();
  constructor( private router: Router, private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
  }
  creer(){

    console.log(this.newUtilisateur);
    this.utilisateurService.creer(this.newUtilisateur).subscribe((response) => {
      console.log(response);
      this.router.navigate(['/connection']);
    })
  }
}
