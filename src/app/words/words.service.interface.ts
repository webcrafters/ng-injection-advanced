import { Observable } from 'rxjs';
export interface IWordsService {
  getWords(): Observable<string[]>;
}
