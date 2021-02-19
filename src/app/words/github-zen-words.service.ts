import { Injectable } from '@angular/core';
import { IWordsService } from './words.service.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GithubZenWordsService implements IWordsService {
  constructor(private http: HttpClient) {}

  getWords(): Observable<string[]> {
    return this.http
      .get('https://api.github.com/zen', {
        responseType: 'text',
      })
      .pipe(
        map((resp: string) => resp.split(' ')),
        map((words: string[]) => words.map((w) => w.replace('.', '')))
      );
  }
}
