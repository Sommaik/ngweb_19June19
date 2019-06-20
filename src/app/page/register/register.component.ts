import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {}

  registerForm = this.fb.group({
    userId: ['', [Validators.required]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  ngOnInit() {}
  onFormSubmit() {
    if (this.registerForm.valid) {
      this.registerService.regis(this.registerForm.value).subscribe(result => {
        this.router.navigate(['login']);
      });
    } else {
      alert('Invalid register form');
    }
  }
}
