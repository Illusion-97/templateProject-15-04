import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule) // C'est ce code qui démarre l'application Angular
  .catch(err => console.error(err));
