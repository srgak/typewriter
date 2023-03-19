import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { ANIMATION_KEY_DURATION } from 'src/app/shared/models/animation-tokens';
import { TypewriterKey } from 'src/app/shared/models/interfaces';
import { moveKey } from './keyboard-button.animation';

@Component({
  selector: 'typewriter-keyboard-button',
  templateUrl: './keyboard-button.component.html',
  styleUrls: ['./keyboard-button.component.less'],
  animations: [
    moveKey
  ],
  providers: [
    AsyncPipe
  ]
})
export class KeyboardButtonComponent implements OnInit {
  @Input() public data!: TypewriterKey;
  @Output() public readonly onPressed: EventEmitter<boolean> = new EventEmitter();

  public isDifferentSymbols: boolean = false;

  constructor(
    private readonly asyncPipe: AsyncPipe,
    @Inject(ANIMATION_KEY_DURATION) public readonly duration: number
  ) { }

  public keyPress(): void {
    // зажата клавиша
    if(this.asyncPipe.transform(this.data.state) === 'down') {
      // console.log('зажата полностью');
      this.onPressed.emit(true);
      // this.data.state = 'up';
    } else {
      this.onPressed.emit(false);
    }
  }

  public onDown(): void {
    // this.data?.state.next('down');
  }

  public onUp(): void {
    // this.data?.state.next('up');
  }

  ngOnInit(): void {
    this.isDifferentSymbols = this.data.symbol?.up.toLowerCase() !== this.data.symbol?.down;
  }
}
