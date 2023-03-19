import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.less']
})
export class ModalMessageComponent implements OnInit {
  @Input() public data!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
