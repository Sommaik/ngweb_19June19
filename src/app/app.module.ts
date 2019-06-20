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
import { TrimCreditCardPipe } from './shared/trim-credit-card.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './page/post-list/post-list.component';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { PrivateZoneComponent } from './page/private-zone/private-zone.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    FormGroupComponent,
    HighlightDirective,
    TrimCreditCardPipe,
    PostListComponent,
    PublicZoneComponent,
    PrivateZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
