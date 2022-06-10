import {
    trigger,
    transition,
    style,
    query,
    animate,
} from '@angular/animations';

export const RouteAnimation = 
    trigger('fadeInOut', [
        transition('* <=> *', [
            query(':enter', [
                style({
                    position: 'relative',
                    opacity: 0,
                }),
                animate('350ms', style({
                    position: 'absolute',
                    opacity: 1,
                }))
            ], {
                optional: true
            }),
            query(':leave', [
                style({
                    position: 'absolute',
                    opacity: 1,
                }),
                animate('1ms', style({
                    position: 'relative',
                    opacity: 0,
                }))
            ], {
                optional: true
            })                        
        ])
    ]);