import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './page/user-list/user-list.component';
import { UserFormComponent } from './page/user-form/user-form.component';

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'form',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
