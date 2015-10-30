/**
 * Created by entryone on 29/10/15.
 */

import {bootstrap, Component, View,  FORM_DIRECTIVES, NgFor, NgIf, NgClass, TemplateConfig} from 'angular2/angular2';


@Component({
    selector: 'customer-card',
    templateUrl: 'app/tpl/customer.card.tpl.html',
    directives: [FORM_DIRECTIVES, NgFor, NgIf, NgClass],
    styleUrls: ['app/style/home.css']

})

export class ToDos {



}