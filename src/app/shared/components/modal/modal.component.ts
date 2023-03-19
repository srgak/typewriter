import { Component, HostBinding, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { RefDirective } from 'src/app/shared/directives/ref/ref.directive';
import { ModalItem } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'ui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() public currentModal!: Subject<ModalItem | null>;
  @ViewChild(RefDirective, {static: true}) private refDir!: RefDirective;
  @HostBinding('style.display') private display: string = 'none';

  public title?: string;
  private viewContainerRef!: ViewContainerRef;
  private readonly subs: Subscription = new Subscription();

  constructor() { }

  private onSelectModal = (modal: ModalItem | null): void => {
    if(modal) {
      const componentRef = this.viewContainerRef.createComponent<any>(modal.component);
      componentRef.instance.data = modal.data;
      this.title = modal.title;
      this.display = 'block';
    } else {
      this.viewContainerRef.clear();
      this.display = 'none';
    }
  }

  public close(): void {
    this.currentModal.next(null);
  };

  ngOnInit(): void {
    this.viewContainerRef = this.refDir.viewContainerRef;
    this.subs.add(
      this.currentModal
        .subscribe(this.onSelectModal)
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
