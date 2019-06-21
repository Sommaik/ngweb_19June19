import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private userService: UserService, private router: Router) {
    this.users = this.userService.findAll();
    // this.userService.findAll().subscribe(result => {
    //   this.users = result;
    // });
  }

  ngOnInit() {}

  onDelClick(id: number) {
    this.userService.delete(id).subscribe(result => {
      this.users = this.userService.findAll();
    });
  }

  onEditClick(id: number) {
    this.router.navigate(['admin', 'user', 'form', id]);
  }

  onAddClick() {
    this.router.navigate(['admin', 'user', 'form']);
  }
}
