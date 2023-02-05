import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export const moveTape: AnimationTriggerMetadata = trigger(
  'moveTape', [
    state('down', style({
      clipPath: `polygon(
        0% calc((4 + {{order}}) * 20px),
        204px calc({{order}} * 20px),
        353px calc({{order}} * 20px),
        calc(50% - 20px) calc(({{order}} - 1) * 20px),
        calc(50% + 20px) calc(({{order}} - 1) * 20px),
        calc(100% - 353px) calc({{order}} * 20px),
        calc(100% - 204px) calc({{order}} * 20px),
        100% calc((4 + {{order}}) * 20px),
        100% calc((5 + {{order}}) * 20px),
        calc(100% - 204px) calc((1 + {{order}}) * 20px),
        calc(100% - 353px) calc((1 + {{order}}) * 20px),
        calc(50% + 20px) calc({{order}} * 20px),
        calc(50% - 20px) calc({{order}} * 20px),
        353px calc((1 + {{order}}) * 20px),
        204px calc((1 + {{order}}) * 20px),
        0% calc((5 + {{order}}) * 20px)
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
