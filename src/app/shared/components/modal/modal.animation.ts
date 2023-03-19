import { animate, AnimationTriggerMetadata, style, transition, trigger } from "@angular/animations";

export const fadeToggle: AnimationTriggerMetadata = trigger(
  'fadeToggle', [
    transition(':enter', [
      animate('1s', style({
        opacity: 1
      }))
    ]),
    transition(':leave', [
      animate('1s', style({
          opacity: 0
        })
      )
    ])
  ]
);