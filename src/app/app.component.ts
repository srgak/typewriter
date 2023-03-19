import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts, Data } from '@angular/router';
import { DataService } from './shared/services/data.service';
import { ModalService } from './shared/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [
    trigger('routeAnimation', [
      transition('PageMain => PageMessages', [
        // style({
        //   position: 'relative'
        // }),
        query(':enter', [
          style({
            position: 'absolute',
            left: '100%',
            // width: '100%'
          }),
          // animate('1s'),
          // style({
          //   left: '0%'
          // })
        ]),
        // query(':enter', [
        //   style({
        //     left: '100%'
        //   })
        // ]),
        group([
          query(':leave', [
            animate('1s'),
            style({
              left: '-100%',
              opacity: 0
            })
          ]),
          query(':enter', [
            animate('1s'),
            style({
              left: '0%'
            })
          ]),
        ])
      ])
    ])
  ]
})
export class AppComponent {
  constructor(
    public data: DataService,
    public modal: ModalService,
    private readonly contexts: ChildrenOutletContexts
  ) {}

  public getRouteAnimationData(): Data {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
