import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TapeData } from 'src/app/models/interfaces';
import { moveTape } from './tape.animation';

@Component({
  selector: 'typewriter-tape',
  templateUrl: './tape.component.html',
  styleUrls: ['./tape.component.less'],
  animations: [
    moveTape
  ],
})
export class TapeComponent implements OnInit {
  @Input() public pressed!: BehaviorSubject<boolean>;

  private subs: Subscription = new Subscription();
  public tapeState: string = 'down';
  public tapeList: TapeData[] = [
    {
      order: 1,
      color: 'black'
    },
    {
      order: 2,
      color: 'red'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.subs.add(
      this.pressed.subscribe(val => {
        if(val) {
          const audio = new Audio('assets/audio/keypress.mp3');
          audio.play();
          this.tapeState = 'down';
        } else {
          this.tapeState = 'up';
        }
      })
    );
  }
}
