import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { HomeComponent } from './page/home/home.component';
import { PostListComponent } from './page/post-list/post-list.component';
import { FormComponent } from './page/form/form.component';
import { FormGroupComponent } from './page/form-group/form-group.component';

const routes: Routes = [
  {
    path: '',
    component: PublicZoneComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'post-list',
        component: PostListComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'form-group',
        component: FormGroupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
