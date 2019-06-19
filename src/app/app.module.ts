import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './page/form/form.component';
import { FormGroupComponent } from './page/form-group/form-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    FormGroupComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
