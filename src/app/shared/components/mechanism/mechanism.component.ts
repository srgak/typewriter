import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { TypewriterKey } from 'src/app/shared/models/interfaces';
import { DataService } from 'src/app/shared/services/data.service';
import { movePetal } from './mechanism.animation';

@Component({
  selector: 'typewriter-mechanism',
  templateUrl: './mechanism.component.html',
  styleUrls: ['./mechanism.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    movePetal
  ]
})
export class MechanismComponent implements OnInit, OnDestroy {
  public readonly ligatureList: TypewriterKey[] = this.data.keyList
    .filter(item => item.code)
    .sort((a, b) => a.code! - b.code!);
  public readonly bobbinAngle: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public readonly tapePressed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly subs: Subscription = new Subscription();

  constructor(
    public readonly data: DataService
  ) { }

  ngOnInit(): void {
    this.subs.add(
      this.data.isTypeLetter
        .subscribe(value => {
          if(this.data.targetKey?.type === 'letter') {
            if(value) this.bobbinAngle.next(this.bobbinAngle.value - 1);
            this.tapePressed.next(value);
          }
        })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
