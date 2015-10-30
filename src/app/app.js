/**
 * Created by entryone on 29/10/15.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Customer = (function () {
    function Customer() {
    }
    return Customer;
})();
var CUSTOMERS = [
    { "id": 11, "company": "Ipsos Insights LLC", group: "Ipsos" },
    { "id": 12, "company": "Ipsos Germany Gmbh", group: "Ipsos" },
    { "id": 13, "company": "Ipsos Insights LLC", group: "Ipsos" },
    { "id": 14, "company": "Synovate Comcon", group: "Ipsos" },
    { "id": 15, "company": "PMI Russia", group: "Ipsos" },
    { "id": 16, "company": "DORInsights", group: "N/A" }
];
var customerCard_1 = require('app/customerCard');
var angular2_1 = require('angular2/angular2');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.customers = CUSTOMERS;
    }
    AppComponent.prototype.onSelect = function (customer) {
        this.selectedCustomer = customer;
    };
    AppComponent.prototype.getSelectedClass = function (customer) {
        return { 'selected': customer === this.selectedCustomer };
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            templateUrl: 'app/tpl/home.tpl.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgIf, angular2_1.NgClass, customerCard_1.ToDos],
            styleUrls: ['app/style/home.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map