import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LigneCMDComponent } from './ligne-cmd/ligne-cmd.component';
import { VendreComponent } from './vendre/vendre.component';

const routes: Routes = [
  {path:"article",component:ArticleComponent},
  {path:"connection",component:ConnectionComponent},
  {path:"ligneCMD",component:LigneCMDComponent},
  {path:"vendre",component:VendreComponent},
  {path:"inscription",component:InscriptionComponent},
  {path:"connection",component:ConnectionComponent},
  {path:"",redirectTo:"connection",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
