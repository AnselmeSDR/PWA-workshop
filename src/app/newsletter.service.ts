import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NewsletterService {

    constructor(public _http: HttpClient) {
    }

    addPushSubscriber(sub: any) {
        // alert(sub);
        console.log(sub);
        return this._http.post('https://gentle-retreat-44010.herokuapp.com/subscribe', sub);
    }
}
