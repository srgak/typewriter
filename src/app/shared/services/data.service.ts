import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LetterPreviewComponent } from '../components/letter-preview/letter-preview.component';
import { ModalItem, PrintedLetter, TypewriterKey } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public keyList: TypewriterKey[] = [
    //строка 1
    {
      type: 'letter',
      symbol: {
        down: '1',
        up: '!'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 1,
      row: 1
    },
    {
      type: 'letter',
      symbol: {
        down: '2',
        up: '"'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 5,
      row: 1
    },
    {
      type: 'letter',
      symbol: {
        down: '3',
        up: '№'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 9,
      row: 1
    },
    {
      type: 'letter',
      symbol: {
        down: '4',
        up: '%'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 13,
      row: 1
    },
    {
      type: 'letter',
      symbol: {
        down: '5',
        up: ':'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 17,
      row: 1
    },
    {
      type: 'letter',
      symbol: {
        down: '6',
        up: ','
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 21,
      row: 1
    },
    {
      type: 'letter',
      symbol: {
        down: '7',
        up: '.'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 25,
      row: 1
    },
    {
      type: 'letter',
      symbol: {
        down: '8',
        up: ';'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 29,
      row: 1
    },
    {
      type: 'letter',
      symbol: {
        down: '9',
        up: '('
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 33,
      row: 1
    },
    {
      type: 'letter',
      symbol: {
        down: '0',
        up: ')'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 37,
      row: 1
    },
    {
      type: 'backspace',
      state: new BehaviorSubject<'up' | 'down'>('up'),
      row: 1
    },
    //строка 2
    {
      type: 'letter',
      symbol: {
        down: 'й',
        up: 'Й'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 2,
      row: 2
    },
    {
      type: 'letter',
      symbol: {
        down: 'ц',
        up: 'Ц'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 6,
      row: 2
    },
    {
      type: 'letter',
      symbol: {
        down: 'у',
        up: 'У'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 10,
      row: 2
    },
    {
      type: 'letter',
      symbol: {
        down: 'к',
        up: 'К'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 14,
      row: 2
    },
    {
      type: 'letter',
      symbol: {
        down: 'е',
        up: 'Е'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 18,
      row: 2
    },
    {
      type: 'letter',
      symbol: {
        down: 'н',
        up: 'Н'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 22,
      row: 2
    },
    {
      type: 'letter',
      symbol: {
        down: 'г',
        up: 'Г'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 26,
      row: 2
    },
    {
      type: 'letter',
      symbol: {
        down: 'ш',
        up: 'Ш'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 30,
      row: 2
    },
    {
      type: 'letter',
      symbol: {
        down: 'щ',
        up: 'Щ'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 34,
      row: 2
    },
    {
      type: 'letter',
      symbol: {
        down: 'з',
        up: 'З'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 38,
      row: 2
    },
    {
      type: 'letter',
      symbol: {
        down: 'х',
        up: 'Х'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 41,
      row: 2
    },
    {
      type: 'letter',
      symbol: {
        down: 'ъ',
        up: 'Ъ'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 43,
      row: 2
    },
    //строка 3
    {
      type: 'letter',
      symbol: {
        down: 'ф',
        up: 'Ф'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 3,
      row: 3
    },
    {
      type: 'letter',
      symbol: {
        down: 'ы',
        up: 'Ы'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 7,
      row: 3
    },
    {
      type: 'letter',
      symbol: {
        down: 'в',
        up: 'В'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 11,
      row: 3
    },
    {
      type: 'letter',
      symbol: {
        down: 'а',
        up: 'А'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 15,
      row: 3
    },
    {
      type: 'letter',
      symbol: {
        down: 'п',
        up: 'П'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 19,
      row: 3
    },
    {
      type: 'letter',
      symbol: {
        down: 'р',
        up: 'Р'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 23,
      row: 3
    },
    {
      type: 'letter',
      symbol: {
        down: 'о',
        up: 'О'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 27,
      row: 3
    },
    {
      type: 'letter',
      symbol: {
        down: 'л',
        up: 'Л'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 31,
      row: 3
    },
    {
      type: 'letter',
      symbol: {
        down: 'д',
        up: 'Д'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 35,
      row: 3
    },
    {
      type: 'letter',
      symbol: {
        down: 'ж',
        up: 'Ж'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 39, 
      row: 3
    },
    {
      type: 'letter',
      symbol: {
        down: 'э',
        up: 'Э'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 42,
      row: 3
    },
    //строка 4
    //шифт
    {
      type: 'shift',
      state: new BehaviorSubject<'up' | 'down'>('up'),
      row: 4
    },
    {
      type: 'letter',
      symbol: {
        down: 'я',
        up: 'Я'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 4,
      row: 4
    },
    {
      type: 'letter',
      symbol: {
        down: 'ч',
        up: 'Ч'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 8,
      row: 4
    },
    {
      type: 'letter',
      symbol: {
        down: 'с',
        up: 'С'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 12,
      row: 4
    },
    {
      type: 'letter',
      symbol: {
        down: 'м',
        up: 'М'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 16,
      row: 4
    },
    {
      type: 'letter',
      symbol: {
        down: 'и',
        up: 'И'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 20,
      row: 4
    },
    {
      type: 'letter',
      symbol: {
        down: 'т',
        up: 'Т'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 24,
      row: 4
    },
    {
      type: 'letter',
      symbol: {
        down: 'ь',
        up: 'Ь'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 28,
      row: 4
    },
    {
      type: 'letter',
      symbol: {
        down: 'б',
        up: 'Б'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 32,
      row: 4
    },
    {
      type: 'letter',
      symbol: {
        down: 'ю',
        up: 'Ю'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 36,
      row: 4
    },
    {
      type: 'letter',
      symbol: {
        down: '/',
        up: '?'
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      code: 40,
      row: 4
    },
    {
      type: 'shift',
      state: new BehaviorSubject<'up' | 'down'>('up'),
      row: 4
    },
    //пробел
    {
      type: 'space',
      symbol: {
        down: ' ',
        up: ' '
      },
      state: new BehaviorSubject<'up' | 'down'>('up'),
      row: 5
    }
  ];
  public targetKey!: TypewriterKey | undefined;
  public isTypeLetter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public register: BehaviorSubject<'down' | 'up'> = new BehaviorSubject<'down' | 'up'>('down');
  public isDisable: boolean = false;
  public currentLetter: PrintedLetter[] = [];

  public isForward(): boolean {
    return this.targetKey?.type !== 'shift';
  }

  constructor() { }
}
