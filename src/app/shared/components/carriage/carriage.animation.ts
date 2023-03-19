import { animate, animateChild, AnimationTriggerMetadata, group, query, state, style, transition, trigger } from "@angular/animations";

export const moveCarriage: AnimationTriggerMetadata = trigger(
  'moveCarriage', [
    state('from', style({
      transform: 'translateX(calc(50% - {{offsetCurrent}}px))'
    }),
    {
      params: {
        offsetCurrent: 0
      }
    }),
    state('to', style({
      transform: 'translateX(calc(50% - {{offsetStart}}px))'
    }),
    {
      params: {
        offsetStart: 0
      }
    }),
    transition('from => to', group([
      query('@moveTrigger', [
        animateChild()
      ]),
      query('@movePaper', [
        animateChild()
      ]),
      animate('{{duration}}s')
    ]),
    {
      params: {
        duration: 0
      }
    })
  ]
);

export const moveTrigger: AnimationTriggerMetadata = trigger(
  'moveTrigger', [
    state('from', style({
      transform: 'rotateY(0deg)'
    })),
    state('to', style({
      transform: 'rotateY(90deg)'
    })),
    transition('from <=> to', [
      animate('0.15s ease-out')
    ])
  ]
);