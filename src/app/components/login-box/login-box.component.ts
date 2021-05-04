import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {
  data: Data = {
    firstName: 'test',
    lastName: '',
    email: '',
    birthYear: null
  };

  loginForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', 
      [Validators.required, 
      Validators.email]],
    birthYear: ['', 
      [Validators.required,
      Validators.min(1800),
      Validators.max(2000)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.loginForm.value)
  }
}

