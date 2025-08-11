import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  
  private baseUrl='http://localhost:8000';

  constructor(private http:HttpClient){}

  register(user:any){
    return this.http.post(`${this.baseUrl}/register`,user);
  }

  login(userCredentials:any){
    return this.http.post(`${this.baseUrl}/login`,userCredentials);
  }

  saveToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggenIn():boolean{
    return !!this.getToken();
  }
}
