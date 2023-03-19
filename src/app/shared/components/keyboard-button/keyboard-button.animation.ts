import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export const moveKey: AnimationTriggerMetadata = trigger(
  'moveKey', [
    state('up', style({
      transform: 'rotateX(0deg)',
      opacity: 1
    })),
    state('down', style({
      transform: 'rotateX(-20deg)',
      opacity: 0.8
    })),
    transition('up => down', animate('0.05s ease-out')),
    transition('down => up', animate('0.01s ease-out'))
  ]
);