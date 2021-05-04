import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/Data';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  data: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
