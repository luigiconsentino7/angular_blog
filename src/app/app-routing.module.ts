import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './pages/contents/contents.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
 {
   path:'',
   component:HomeComponent
  },
  {
    path:'content/:id',
    component:ContentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
