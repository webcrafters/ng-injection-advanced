import { Injectable } from '@angular/core';
import { IWordsService } from './words.service.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DianaGhReposService implements IWordsService {
  constructor(private http: HttpClient) {}

  getWords(): Observable<string[]> {
    return this.http
      .get<{ name: string }[]>('https://api.github.com/users/diana-szk/repos')
      .pipe(map((resp) => resp.map((repo) => repo.name)));
  }
}
