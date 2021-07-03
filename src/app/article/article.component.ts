import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../Service/article.service';
import { CategorieService } from '../Service/categorie.service';
import { Categorie } from '../Classe/categorie';
import { Article } from '../Classe/article';
import { Lignecmd } from '../Classe/lignecmd';
import { LigneCmdService } from '../Service/ligne-cmd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles : Article[] = [];
  Newlignecmd : Lignecmd = new Lignecmd();
  prix : number = 0;
  constructor(private articleService:ArticleService, private categorieService:CategorieService,private lignecmdService : LigneCmdService , private router: Router) { }

  ngOnInit(): void {
    this.toutArticle();
  }
  
   index : number = 0;
  toutArticle(){
    this.articleService.getArticleEtat().subscribe((response : Article[])=> {
      console.log("ezzzzzzzeeeee");  
      console.log(response);  
      this.articles = response;

      } )
  }

  acheter(index :number){ 
    this.index = index
    this.prix = this.articles[index].prix;
  }

  ConfirmerAchat(){
   
    this.Newlignecmd.articleDtos.id = this.articles[this.index].id ;
    this.Newlignecmd.dateCommande = new Date();   
    this.Newlignecmd.utilisateurDto.id = Number(sessionStorage.getItem('id'));
    this.lignecmdService.create(this.Newlignecmd).subscribe((response )=> {
      this.router.navigate(['/article']);
  } )
  }


}