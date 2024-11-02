import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class githubService {
  url: string = 'https://api.github.com/';
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<any>(this.url + 'users').pipe(
      map((response) => {
        return response;
      })
    );
  }
}
