import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export const movePetal: AnimationTriggerMetadata = trigger(
  'movePetal', [
    state('up', style({
      transform: 'translateY(-18px)'
    })),
    state('down', style({
      transform: ''
    })),
    transition('up <=> down', animate('0.05s ease-out'))
  ]
);