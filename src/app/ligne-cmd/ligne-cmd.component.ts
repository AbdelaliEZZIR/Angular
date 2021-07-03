import { Component, OnInit } from '@angular/core';
import { Lignecmd } from '../Classe/lignecmd';
import { Utilisateur } from '../Classe/utilisateur';
import { UtilisateurService } from '../Service/utilisateur.service';
import { LigneCmdService } from '../Service/ligne-cmd.service';

@Component({
  selector: 'app-ligne-cmd',
  templateUrl: './ligne-cmd.component.html',
  styleUrls: ['./ligne-cmd.component.css']
})
export class LigneCMDComponent implements OnInit {


  utilisateur : Utilisateur = new Utilisateur();
   ligneCmds : Lignecmd [] = [];
   s : string = "";
  constructor(private ligneCmd :LigneCmdService)  { }

  ngOnInit(): void {
   this.ligneCmd.getLesAcats().subscribe((response:Lignecmd[]) =>  {
     console.log("aaaaaaa") 
     console.log(response)
      this.ligneCmds = response;
   })
  }

}
