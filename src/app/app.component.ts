import { Component, OnInit } from '@angular/core';
import { createConnection } from 'typeorm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    createConnection({
      type: 'sqlite',
      database: 'C:\Users\Jeremy\dev\projects\prototyping\angular13-prototype-starter\database.db'
  })

  }
  title = 'angular13-prototype-starter';
}
