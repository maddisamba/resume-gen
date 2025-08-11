import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from './auth';
import { request } from 'http';

@Injectable()
export class authInterceptor implements HttpInterceptor{
  constructor(private authService:Auth){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=this.authService.getToken();

    if(token){
      req = req.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      })
    }

    return next.handle(req);
  }
}