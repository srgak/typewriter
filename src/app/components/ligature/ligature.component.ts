import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { TypewriterKey } from 'src/app/models/interfaces';
import { moveLigature } from './ligature.animation';

@Component({
  selector: 'typewriter-ligature',
  templateUrl: './ligature.component.html',
  styleUrls: ['./ligature.component.less'],
  animations: [
    moveLigature
  ]
})
export class LigatureComponent implements OnInit {
  @Input() public data!: TypewriterKey;
  @Input() public totalLigatures!: number;

  public angle!: number;
  public transformSymbol!: string;

  constructor() { }

  @HostBinding('style.transform') private transform!: string;

  ngOnInit(): void {
    const angleInterval = (-150 / this.totalLigatures);
    this.angle = this.data.code! * angleInterval - angleInterval / 2 - 15;
    this.transform = `rotate(${this.angle}deg)`;
    this.transformSymbol = `rotateY(180deg) rotateZ(${-this.angle}deg)`;
  }

}
