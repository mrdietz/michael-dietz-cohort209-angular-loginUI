import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  data: Data = {
    firstName: '',
    lastName: '',
    email: '',
    birthYear: null
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data = {
      firstName: this.route.snapshot.params['firstName'],
      lastName: this.route.snapshot.params['lastName'],
      email: this.route.snapshot.params['email'],
      birthYear: this.route.snapshot.params['birthYear']
    };
  }

}
