import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaperService {
  public nextSymbol: Subject<string> = new Subject<string>(); //следующий символ
  public nextLine: Subject<true> = new Subject<true>(); //следующа строка
  public isBack: Subject<boolean> = new Subject<boolean>(); //переход назад
  public isClear: Subject<void> = new Subject<void>(); //отчистить бумагу
  public movePaper: Subject<number> = new Subject<number>(); //двигать бумагу

  constructor() { }
}
