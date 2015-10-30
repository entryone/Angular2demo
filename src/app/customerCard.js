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
var angular2_1 = require('angular2/angular2');
var ToDos = (function () {
    function ToDos() {
    }
    ToDos = __decorate([
        angular2_1.Component({
            selector: 'customer-card',
            templateUrl: 'app/tpl/customer.card.tpl.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.NgFor, angular2_1.NgIf, angular2_1.NgClass],
            styleUrls: ['app/style/home.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ToDos);
    return ToDos;
})();
exports.ToDos = ToDos;
//# sourceMappingURL=customerCard.js.map