import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFormComponent } from './card-form/card-form.component';
import { PreviewComponent } from './preview/preview.component';


const routes: Routes = [
  { path: '', component: CardFormComponent },
  { path: 'preview', component: PreviewComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
