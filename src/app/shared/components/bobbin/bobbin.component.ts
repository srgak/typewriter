import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'typewriter-bobbin',
  templateUrl: './bobbin.component.html',
  styleUrls: ['./bobbin.component.less']
})
export class BobbinComponent implements OnInit, OnDestroy {
  @Input() public angle!: BehaviorSubject<number>;

  private readonly subs: Subscription = new Subscription();

  constructor() { }

  @HostBinding('style.transform') private transform!: string;

  private onRotate = (value: number): void => {
    this.transform = `rotate(${value}deg)`;
  };

  ngOnInit(): void {
    this.subs.add(
      this.angle.subscribe(this.onRotate)
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
