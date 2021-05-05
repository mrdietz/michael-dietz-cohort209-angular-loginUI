import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {
  // data: Data = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   birthYear: 1
  // };

  loginForm = new FormGroup({
    firstName: new FormControl(['', Validators.required]),
    lastName:  new FormControl(['', Validators.required]),
    email:  new FormControl(['', 
      [Validators.required, 
      Validators.email]]),
    birthYear:  new FormControl([null, 
      [Validators.required,
      Validators.min(1800),
      Validators.max(2000)]])
  });

  constructor(private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/results']);
    console.log(this.loginForm)
  }
}

