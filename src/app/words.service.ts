import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  private _words: string[] = [
    'angular',
    'development',
    'rendering',
    'frontend',
    'application',
    'expression',
    'closure',
    'observable',
    'array',
    'code',
    'return',
  ];

  constructor() {}

  getWords(): Observable<string[]> {
    return of(this._words);
    // "of" produce un observable care emite o singura valoare, pe cea din parametru. se emite instantaneu, in momentul in care te abonezi la el
  }
}
