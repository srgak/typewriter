import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaperService {
  public nextSymbol: Subject<string> = new Subject<string>();
  public nextLine: Subject<boolean> = new Subject<boolean>();
  public isBack: Subject<boolean> = new Subject<boolean>();
  public isClear: Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
