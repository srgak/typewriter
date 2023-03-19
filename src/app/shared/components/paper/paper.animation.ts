import { animate, AnimationTriggerMetadata, query, state, style, transition, trigger } from "@angular/animations";

export const movePaper: AnimationTriggerMetadata = trigger(
  'movePaper', [
    state('up', style({
      transform: 'translateY({{translateEnd}}px)'
    }),
    {
      params: {
        translateEnd: 0
      }
    }),
    transition('down => up', animate('0.05s ease-out'))
  ]
);