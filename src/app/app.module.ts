import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { PreviewComponent } from './preview/preview.component';
import { VisitingCardService } from './card-form/visiting-card.service'; 


@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    PreviewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [VisitingCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
