import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'reflect-metadata';
import {createConnection} from "typeorm";
import {Employee} from "./app/data/Employee";

if (environment.production) {
  enableProdMode();
}

(async () => {
  try {
    const connection = await createConnection({
      type: 'sqlite',
      database: 'C:\Users\Jeremy\dev\projects\prototyping\angular13-prototype-starter\database.db',
      entities: [
        Employee
      ],
      logging: true,
      synchronize: true
    })

      console.log("Connection Created")

      // setting true will drop tables and recreate
      await connection.synchronize(false)

      console.log("Synchronized")
  } catch (err) {
    console.error(err)
  }
})();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
