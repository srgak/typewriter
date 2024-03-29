import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { TypewriterKey } from 'src/app/shared/models/interfaces';
import { DataService } from 'src/app/shared/services/data.service';
import { MethodsService } from 'src/app/shared/services/methods.service';
import { PaperService } from 'src/app/shared/services/paper.service';

@Component({
  selector: 'typewriter-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyboardComponent implements OnInit {
  @Output() public readonly onPressKey: EventEmitter<number | null> = new EventEmitter<number | null>();
  
  public keyState: 'up' | 'down' = 'up';
  public keysLetter: TypewriterKey[][] = [
    //строка 1
    this.data.keyList.filter(key => key.row === 1),
    //строка 2
    this.data.keyList.filter(key => key.row === 2),
    //строка 3
    this.data.keyList.filter(key => key.row === 3),
    //строка 4
    this.data.keyList.filter(key => key.row === 4),
    //строка 5
    this.data.keyList.filter(key => key.row === 5)
  ];

  constructor(
    public readonly data: DataService,
    public readonly methods: MethodsService,
    public readonly paperData: PaperService
  ) { }

  @HostListener('document:keydown', ['$event']) private onKeyDown(event: KeyboardEvent): void {
    if(event.repeat || (this.data.isDisable && !this.methods.isFreelyKey(event.key))) return;
    // console.log(event);

    this.data.targetKey = this.getTargetKey(event.key);
    this.data.targetKey?.state.next('down');
  }
  @HostListener('document:keyup', ['$event']) private onKeyUp(event: KeyboardEvent): void {
    this.data.targetKey = this.getTargetKey(event.key);
    this.data.targetKey?.state.next('up');
  }

  private getTargetKey(key: string): TypewriterKey | undefined {
    switch(key) {
      case 'Shift':
      case 'Backspace':
        return this.data.keyList.find(item => item.type === key.toLowerCase());
      default:
        return this.data.keyList.find(item => item.symbol?.[this.data.register.value] === key);
    }
  }

  public onPressBtn(event: boolean): void {
    const btnType = this.data.targetKey?.type;

    switch(btnType) {
      case 'shift':
        this.data.register.next(event ? 'up' : 'down');
        break;
      case 'space':
        this.data.isTypeLetter.next(event);
        break;
      case 'backspace':
        this.paperData.isBack.next(event);
        break;
      default:
        this.data.isTypeLetter.next(event);
        break;
    }
  }

  ngOnInit(): void {
  }
}
