import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WORDS_SERVICE } from './words/words.inj.token';
import { GithubZenWordsService } from './words/github-zen-words.service';
import { DummyWordsService } from './words/dummy-words.service';
import { TrumpWordsService } from './words/trump-words.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    // { provide: WORDS_SERVICE, useFactory: () => new DummyWordsService() },
    // {
    //   provide: WORDS_SERVICE,
    //   useFactory: (http: HttpClient) => new GithubZenWordsService(http),
    //   deps: [HttpClient],
    // },
    {
      provide: WORDS_SERVICE,
      useFactory: (http: HttpClient) => new TrumpWordsService(http),
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
