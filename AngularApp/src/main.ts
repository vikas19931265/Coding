/*
1. Main is the first place from which the execution of program  is going to begin.
2. bootstrapModule(AppModule) function will kick start the AppModule which is app.module.ts
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) //1 step
  .catch(err => console.error(err));
