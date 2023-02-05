import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'typewriter-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
