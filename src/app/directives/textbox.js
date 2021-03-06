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
/**
 * Created by arnoldkrumins on 10/12/15.
 */
var user_1 = require('./../models/user');
var angular2_1 = require('angular2/angular2');
var tbox = (function () {
    function tbox() {
        this.person = new user_1.user('Arnold', 48, 'male');
    }
    tbox = __decorate([
        angular2_1.Component({
            selector: 'my-textbox',
            template: "<div>\n                <label>{{ person.name }}</label>\n                 <input type=\"text\"/><button (click)=\"\">Press Me</button>\n               </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], tbox);
    return tbox;
})();
exports.tbox = tbox;
//# sourceMappingURL=textbox.js.map