import { Component, OnInit } from '@angular/core';
import { Dolar } from 'src/app/models/dolar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  dolar: Dolar;
  loaded: Boolean = true;
  constructor() { }

  ngOnInit() {
    console.log('Dashboard component loaded...');
  }

}
