import { Component, OnInit } from '@angular/core';
import { Article } from '../Classe/article';
import { ArticleService } from '../Service/article.service';
import { CategorieService } from '../Service/categorie.service';
import { Categorie } from '../Classe/categorie';
import { Router } from '@angular/router';
import { SavePhoto } from '../Classe/save-photo';

@Component({
  selector: 'app-vendre',
  templateUrl: './vendre.component.html',
  styleUrls: ['./vendre.component.css']
})
export class VendreComponent implements OnInit {

  savephoto :SavePhoto = new SavePhoto();
  selectedFile: any = null;
  article :Article= new Article();
  newArticle: Article= new Article();
  categories : Categorie[] = [];

  constructor(private articleService: ArticleService, private router: Router, private categorieService:CategorieService) { }

  ngOnInit() {
    this.categorieService.getCategorie().subscribe(
      (response : Categorie[])=> {
        console.log('response***********')
        console.log(response)
        this.categories = response;
      } )
  }

  onSelectFile(event:any) {
    this.selectedFile = event.target.files[0] as File;
  }

  saveArticle(){
    
    this.newArticle.utilisateurDto.id = Number(sessionStorage.getItem('id'));
    this.newArticle.photo = this.selectedFile;
    this.articleService.addArticle(this.newArticle).subscribe((response :Article) => {
        this.savephoto.id = response.id;
        this.savephoto.titre = "photo";
        this.savephoto.photo = this.selectedFile;
        console.log("cccccccsssssssss")
        console.log(this.savephoto);

     this.router.navigate(['/article']);
    })
  }

}
