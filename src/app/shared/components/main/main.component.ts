import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'typewriter-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  constructor(
    private readonly data: DataService,
    private readonly modal: ModalService
  ) { }

  public sendLetter(): void {
    if(this.data.currentLetter.length) {
      this.modal.addModal('preview', this.data.currentLetter);
    } else {
      this.modal.addModal('message', 'Вы ничего не написали!');
    }
  }

  ngOnInit(): void {
  }

}
