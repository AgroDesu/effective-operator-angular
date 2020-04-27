import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  logged: Employee = null;
  url = this.urlService.getURL() + "/login";
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(public urlService: UrlService, public http: HttpClient) { }

  checkLogin(): Observable<Employee> {
    return this.http.get(this.url, {headers: this.headers, withCredentials: true})
      .pipe(
        map(resp => { 
          this.logged = resp as Employee;
          return this.logged;
        })
      );
  }

  login(username: string, password: string): Observable<Employee> {
    let body = [{"name": "username", "value": username}, {"name": "password", "value": password}];

    return this.http.post(this.url, JSON.stringify(body), {headers: this.headers, withCredentials: true})
      .pipe(
        map(resp => { 
          this.logged = resp as Employee;
          return this.logged;
        })
      );
  }

  getLogged(): Employee {
    return this.logged;
  }

  logout(): Observable<Employee> {
    let logoutURL = this.urlService.baseURL + "/logout"
    return this.http.delete(logoutURL, {headers: this.headers, withCredentials: true})
      .pipe(
        map(resp => {
          this.logged = null;
          return this.logged;
        })
      );
  }
}
