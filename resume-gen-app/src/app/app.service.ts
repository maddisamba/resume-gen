import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  public submitLink(file:any,jobLink: any): Observable<any> {
    const userData=new FormData()
    userData.append('file',file)
    userData.append('jobLink',jobLink)
    return this.http.post('http://localhost:8000/addUser',userData);
  }
}