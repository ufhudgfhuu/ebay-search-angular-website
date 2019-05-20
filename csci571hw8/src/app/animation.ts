import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild, state
} from '@angular/animations';

export const slideOutAnimation =
  trigger('routeAnimations', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('* => DetailPage', [
    animate('5000ms', style({ transform: 'translateX(100%)' }))
  ])
]);
