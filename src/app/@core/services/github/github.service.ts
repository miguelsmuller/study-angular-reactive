import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private http: HttpClient) {}

  URL = 'https://api.github.com/repos/miguelsmuller/angular-crud/{file}';

  getContent(file: string): Observable<string> {
    const url = this.URL.replace('{file}', file);
    const headers = new HttpHeaders()
      .set('Accept', 'application/vnd.github.v3.html')
      .append('content-type', 'text/html; charset=utf-8');

    return this.http.get(url, { headers, responseType: 'text' });
  }
}
