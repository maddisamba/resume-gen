import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { authInterceptor } from './auth-interceptor';
import { App } from './app';
import { routes } from './app.routes';


@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    App, 
    Login, 
    Register, 
    Profile,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
