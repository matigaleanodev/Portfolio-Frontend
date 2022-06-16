import { 
    animate, 
    state, 
    style, 
    transition, 
    trigger 
} from '@angular/animations';

export const CollapsePanelAnimation = [
    trigger('collapsePanelContent',[
        state(
            'hidden',
            style({
                height: '0',
                padding: '0',
                overflow: 'hidden',
            })
        ),
        state(
            'visible',
            style({
                height: '*',
            })
        ),
        transition('hidden <=> visible', [
            style({overflow: 'hidden'}),
            animate('{{transitionParams}}'),
        ]),
        transition('void => *', animate(0)),        
    ]),
]