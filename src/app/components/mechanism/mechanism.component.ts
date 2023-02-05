import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TypewriterKey } from 'src/app/models/interfaces';
import { DataService } from 'src/app/services/data.service';
import { movePetal } from './mechanism.animation';

@Component({
  selector: 'typewriter-mechanism',
  templateUrl: './mechanism.component.html',
  styleUrls: ['./mechanism.component.less'],
  animations: [
    movePetal
  ]
})
export class MechanismComponent implements OnInit, OnDestroy {
  public ligatureList: TypewriterKey[] = this.data.keyList
    .filter(item => item.code)
    .sort((a, b) => a.code! - b.code!);
  public bobbinAngle: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public tapePressed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private subs: Subscription = new Subscription();

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.subs.add(
      this.data.isTypeLetter
        .subscribe(val => {
          if(this.data.targetKey?.type === 'letter') {
            this.bobbinAngle.next(this.bobbinAngle.value - 1);
            this.tapePressed.next(val);
          }
        })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
