import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor() { }
  
  public isFreelyKey(name: string): boolean {
    switch(name) {
      case 'Enter':
        return true;
      case 'Backspace':
        return true;
      default:
        return false;
    }
  }
}
