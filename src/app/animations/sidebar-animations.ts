import { animate, trigger, transition, style, keyframes } from '@angular/animations';

export const SidebarAnimation = [
    
    trigger('fadeInOut',[
        transition(':enter',[
          style({opacity:0}),
          animate('350ms', 
            style({opacity:1})
            )
        ]),
        transition(':leave',[
          style({opacity:1}),
          animate('350ms', 
            style({opacity:0})
            )
        ])
      ]),
      trigger('rotate',[
        transition(':enter',[
          animate('700ms',
            keyframes([
              style({transform: 'rotate(0deg)', offset: 0}),
              style({transform: 'rotate(1turn)', offset: 1}),
            ])
            )
        ]),      
      ])
]