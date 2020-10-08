import {Component} from '@angular/core';
import {SwPush} from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'PWA-workshop';
    readonly VAPID_PUBLIC_KEY = 'BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo';

    constructor(
        private swPush: SwPush) {}

    subscribeToNotifications() {
        this.swPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        })
            .then(sub => console.log(sub))
            .catch(err => console.error('Could not subscribe to notifications', err));
    }
}
