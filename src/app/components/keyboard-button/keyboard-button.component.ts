import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TypewriterKey } from 'src/app/models/interfaces';
import { moveKey } from './keyboard-button.animation';

@Component({
  selector: 'typewriter-keyboard-button',
  templateUrl: './keyboard-button.component.html',
  styleUrls: ['./keyboard-button.component.less'],
  animations: [
    moveKey
  ]
})
export class KeyboardButtonComponent implements OnInit {
  @Input() public data!: TypewriterKey | null;
  @Output() public onPressed: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public keyPress(): void {
    // зажата клавиша
    if(this.data?.state.value === 'down') {
      // console.log('зажата полностью');
      this.onPressed.emit(true);
      // this.data.state = 'up';
    } else {
      this.onPressed.emit(false);
    }
  }

  ngOnInit(): void {
  }

}
