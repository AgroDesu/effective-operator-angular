import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  baseURL: string = "http://localhost:8080";
  constructor() { }

  getURL() {
    return this.baseURL;
  }
}
