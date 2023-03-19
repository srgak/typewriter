import { animate, AnimationTriggerMetadata, group, query, state, style, transition, trigger } from "@angular/animations";

export const foldPaper: AnimationTriggerMetadata = trigger(
  'foldPaper', [
    state('wrap', style({
      display: 'none'
    })),
    transition('* => wrap', [
      //уменьшить письмо и расположить по центру
      animate('0.5s ease-out', style({
        transform: 'translate(-50%, -50%) scale(0.5)',
        top: '50%',
        left: '50%'
      })),
      //сложить верхнюю часть
      group([
        query('.paper-preview__item:first-child .paper-preview__side_front', [
          animate('1s'),
          style({
            transform: 'rotateX(-180deg)'
          })
        ]),
        query('.paper-preview__item:first-child .paper-preview__side_back', [
          animate('1s'),
          style({
            transform: 'rotateX(-180deg)'
          })
        ]),
      ]),
      //сложить нижнюю часть
      group([
        query('.paper-preview__item:last-child', [
          style({
            zIndex: '3'
          })
        ]),
        query('.paper-preview__item:last-child .paper-preview__side_front', [
          animate('1s'),
          style({
            transform: 'rotateX(180deg)'
          })
        ]),
        query('.paper-preview__item:last-child .paper-preview__side_back', [
          animate('1s'),
          style({
            transform: 'rotateX(180deg)'
          })
        ]),
      ]),
      //поднять письмо
      animate('1s ease', style({
        transform: 'translate(-50%, calc(-50% - 193px)) scale(0.5)',
      })),
      //скрыть письмо
      animate('0.5s', style({
        display: 'none'
      }))
    ])
  ]
);

export const toggleEnvelope: AnimationTriggerMetadata = trigger(
  'toggleEnvelope', [
    transition('* => wrap', [
      //начальное состояние
      style({
        opacity: 0
      }),
      //появление конверта
      animate('0.5s 3.5s ease-out', style({
        opacity: 1
      })),
      //положить письмо в конверт
      query('.envelope__letter', [
        animate('0.7s'),
        style({
          bottom: 0
        })
      ]),
      //закрыть конверт
      query('.envelope__triangle_down', [
        animate('1s'),
        style({
          zIndex: 2,
          transform: 'rotateX(0deg)'
        })
      ]),
      //передвинуть конверт к центру
      animate('0.5s', style({
        bottom: '50%',
        transformOrigin: 'center',
        transform: 'translateY(50%) scale(0.5)'
      })),
      //развернуть конверт
      group([
        query('.envelope__side_front', [
          animate('1s'),
          style({
            transform: 'rotateY(0deg)'
          })
        ]),
        query('.envelope__side_back', [
          animate('1s'),
          style({
            transform: 'rotateY(-180deg)'
          })
        ])
      ]),
      //скрыть конверт
      animate('1s', style({
        opacity: 0
      }))
    ])
  ]
);