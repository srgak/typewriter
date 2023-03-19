import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { LetterPreviewComponent } from '../components/letter-preview/letter-preview.component';
import { ModalMessageComponent } from '../../modal-message/modal-message.component';
import { ModalItem } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public isShow: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public modalList: ModalItem[] = [
    {
      component: ModalMessageComponent,
      title: 'Сообщение',
      data: null,
      name: 'message'
    },
    {
      component: LetterPreviewComponent,
      title: 'Проверьте письмо',
      data: null,
      name: 'preview'
    }
  ];
  public currentModal: Subject<ModalItem | null> = new Subject<ModalItem | null>();

  constructor() { }

  addModal(name: string, data: any): void {
    const targetModal = this.modalList.find(item => item.name === name);

    if(targetModal) {
      targetModal.data = data;
      this.currentModal.next(targetModal);
      this.isShow.next(true);
    }
  }
}
