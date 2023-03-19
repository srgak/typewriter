import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export const moveTape: AnimationTriggerMetadata = trigger(
  'moveTape', [
    state('down', style({
      clipPath: `polygon(
        0% calc(({{order}} + 4) * 20px),
        calc(50% - 20px) calc({{order}} * 20px),
        calc(50% + 20px) calc({{order}} * 20px),
        100% calc(({{order}} + 4) * 20px),
        100% calc(({{order}} + 5) * 20px),
        calc(50% + 20px) calc(({{order}} + 1) * 20px),
        calc(50% - 20px) calc(({{order}} + 1) * 20px),
        0% calc(({{order}} + 5) * 20px)
      )`
    }),
    {
      params: {
        order: 1
      }
    }),
    state('up', style({
      clipPath: `polygon(
        0% calc(({{order}} + 4) * 20px),
        calc(50% - 20px) calc(({{order}} - 1) * 20px),
        calc(50% + 20px) calc(({{order}} - 1) * 20px),
        100% calc(({{order}} + 4) * 20px),
        100% calc(({{order}} + 5) * 20px),
        calc(50% + 20px) calc({{order}} * 20px),
        calc(50% - 20px) calc({{order}} * 20px),
        0% calc(({{order}} + 5) * 20px)
      )`
    }),
    {
      params: {
        order: 1
      }
    }),
    transition('up <=> down', animate('0.05s ease-out'))
  ]
);
