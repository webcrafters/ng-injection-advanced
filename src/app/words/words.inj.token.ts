import { IWordsService } from './words.service.interface';
import { InjectionToken } from '@angular/core';
export const WORDS_SERVICE = new InjectionToken<IWordsService>('Words Service');
