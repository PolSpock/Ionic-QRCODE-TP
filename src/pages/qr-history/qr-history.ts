import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HistoryProvider} from "../../providers/history/history";

@IonicPage()
@Component({
    selector: 'page-qr-history',
    templateUrl: 'qr-history.html',
})
export class QrHistoryPage {
    constructor(public navCtrl: NavController, public navParams: NavParams, public historyProvider: HistoryProvider) {}
}
