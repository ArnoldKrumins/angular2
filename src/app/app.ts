/**
 * Created by arnoldkrumins on 10/12/15.
 */

import {tbox} from './directives/textbox';

import {bootstrap, Component} from 'angular2/angular2';
@Component({
    directives:[tbox],
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><my-textbox></my-textbox>'
})
class AppComponent { }
bootstrap(AppComponent);