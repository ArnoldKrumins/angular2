/**
 * Created by arnoldkrumins on 10/12/15.
 */
import {user} from './../models/user';


import {Component} from 'angular2/angular2';
@Component({
    selector: 'my-textbox',
    template: `<div>
                <label>{{ person.name }}</label>
                 <input type="text"/><button (click)="">Press Me</button>
               </div>`
})
export class tbox {

    public person:user = new user('Arnold',48,'male');

}

