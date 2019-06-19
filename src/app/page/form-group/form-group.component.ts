import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  simpleForm = this.fb.group({
    first: ['', [Validators.required, Validators.email]],
    last: ['', [Validators.required]]
  });

  ngOnInit() {}

  onFormSubmit() {
    if (this.simpleForm.valid) {
      alert('Valid form');
    } else {
      alert('Invalid form');
    }
  }
}
