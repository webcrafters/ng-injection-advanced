import { Component, Inject } from '@angular/core';
import { WORDS_SERVICE } from './words/words.inj.token';
import { IWordsService } from './words/words.service.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'arrays-exercise';
  words$ = this.wordsSvc.getWords();
  constructor(@Inject(WORDS_SERVICE) private wordsSvc: IWordsService) {}

  processWords(words: string[]): string[][] {
    return words.map((word) => {
      const letters = word.split('');
      return letters.join('_').split('');
    });
  }
}
