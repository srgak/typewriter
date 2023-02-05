import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export const moveLigature: AnimationTriggerMetadata = trigger(
  'moveLigature', [
    state('up', style({
      transform: 'rotateY(0deg)'
    })),
    state('down', style({
      transform: 'rotateY(180deg)'
    })),
    transition('up => down', animate('0.01s ease-out')),
    transition('down => up', animate('0.3s ease-out'))
  ]
);