import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'typewriter-scroll-wheel',
  templateUrl: './scroll-wheel.component.html',
  styleUrls: ['./scroll-wheel.component.less']
})
export class ScrollWheelComponent implements OnInit {
  @Output() public readonly onRotateWheel: EventEmitter<number> = new EventEmitter();

  public readonly btnList: number[] = [-2, -1, 1, 2];

  constructor() { }

  public onRotate(value: number): void {
    this.onRotateWheel.emit(value);
  }

  ngOnInit(): void {

  }

}
