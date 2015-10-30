/**
 * Created by entryone on 29/10/15.
 */


class Customer {
    id:number;
    company:string;
    group:string;
}


var CUSTOMERS:Customer[] = [
    {"id": 11, "company": "Ipsos Insights LLC", group: "Ipsos"},
    {"id": 12, "company": "Ipsos Germany Gmbh", group: "Ipsos"},
    {"id": 13, "company": "Ipsos Insights LLC", group: "Ipsos"},
    {"id": 14, "company": "Synovate Comcon", group: "Ipsos"},
    {"id": 15, "company": "PMI Russia", group: "Ipsos"},
    {"id": 16, "company": "DORInsights", group: "N/A"}


];



import {ToDos} from 'app/customerCard';

import {bootstrap, Component, View,  FORM_DIRECTIVES, NgFor, NgIf, NgClass, TemplateConfig} from 'angular2/angular2';


@Component({
    selector: 'my-app',
    templateUrl: 'app/tpl/home.tpl.html',
    directives: [FORM_DIRECTIVES, NgFor, NgIf, NgClass, ToDos],
    styleUrls: ['app/style/home.css']

})




class AppComponent {

    public title = 'Tour of Heroes';
    public selectedCustomer:Customer;


    public customers = CUSTOMERS;

    onSelect(customer:Customer) {
        this.selectedCustomer = customer;
    }

    getSelectedClass(customer:Customer) {
        return {'selected': customer === this.selectedCustomer};
    }
}

bootstrap(AppComponent);