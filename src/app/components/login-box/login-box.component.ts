import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
  };

  ngOnInit(): void {  
    this.loginForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName:  ['', Validators.required],
    email:  ['', [Validators.required, Validators.email]],
    birthYear:  [null, [Validators.required, Validators.min(1800), Validators.max(2000)]]
  });
  }

  onSubmit(form: FormGroup) {
    this.router.navigate(['/results', form.value.firstName, form.value.lastName, form.value.email, form.value.birthYear]) 
  };
}

