import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TapeData } from 'src/app/shared/models/interfaces';
import { ExtraAudio } from 'src/app/shared/scripts/extraAudio';
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

  private readonly subs: Subscription = new Subscription();
  public readonly tapeState: BehaviorSubject<string> = new BehaviorSubject<string>('down');
  public readonly tapeList: TapeData[] = [
    {
      order: 1,
      color: 'black'
    },
    {
      order: 2,
      color: 'red'
    }
  ];
  private audioTapePress!: ExtraAudio;

  constructor() { }

  ngOnInit(): void {
    this.subs.add(
      this.pressed.subscribe(value => {
        if(value) {
          this.audioTapePress = new ExtraAudio('assets/audio/keypress.mp3');
          this.audioTapePress.play();
          this.tapeState.next('up');
        } else {
          this.tapeState.next('down');
        }
      })
    );
  }
}
