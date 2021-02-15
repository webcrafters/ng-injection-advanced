import { Injectable } from '@angular/core';
import { IWordsService } from './words.service.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrumpWordsService implements IWordsService {
  constructor(private http: HttpClient) {}

  getWords(): Observable<string[]> {
    return this.http
      .get<{ message: string }>(
        'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
      )
      .pipe(
        map((resp) => resp.message.split(' ').map((w) => w.replace('.', '')))
      );
  }
}
