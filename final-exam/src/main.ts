import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SetAComponent } from './app/set-a/set-a.component';
import { RegistrationFormComponent } from './app/registration-form/registration-form.component';

const routes = [
  { path: '', component: SetAComponent },
  { path: 'registration', component: RegistrationFormComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withComponentInputBinding())],
}).catch(err => console.error(err));
