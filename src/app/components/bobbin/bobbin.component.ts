import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'typewriter-bobbin',
  templateUrl: './bobbin.component.html',
  styleUrls: ['./bobbin.component.less']
})
export class BobbinComponent implements OnInit, OnDestroy {
  @Input() public angle!: BehaviorSubject<number>;

  private subs: Subscription = new Subscription();

  constructor() { }

  @HostBinding('style.transform') private transform!: string;

  ngOnInit(): void {
    this.subs.add(
      this.angle.subscribe(val => {
        this.transform = `rotate(${val}deg)`;
      })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
