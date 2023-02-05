import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export const moveKey: AnimationTriggerMetadata = trigger(
  'moveKey', [
    state('up', style({
      transform: 'scale(1)',
      opacity: 1
    })),
    state('down', style({
      transform: 'scale(0.9)',
      opacity: 0.8
    })),
    transition('up => down', animate('0.01s ease-out')),
    transition('down => up', animate('0.01s ease-out'))
  ]
);