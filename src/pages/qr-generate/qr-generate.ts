import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SocialSharing} from "@ionic-native/social-sharing";
import {HistoryProvider} from "../../providers/history/history";
import {QrCodeProvider} from "../../providers/qr-code/qr-code";

@IonicPage()
@Component({
    selector: 'page-qr-generate',
    templateUrl: 'qr-generate.html',
})
export class QrGeneratePage {
    private qrText: string = 'String example';
    private qrImage: string = '';

    hasQRImage() {
        return this.qrImage !== '';
    }

    constructor(public navCtrl: NavController, public navParams: NavParams, public socialSharing: SocialSharing,
                private historyProvider: HistoryProvider, private qrCodeProvider: QrCodeProvider) {
    }

    start() {
        this.qrCodeProvider.generate(this.qrText).then((url) => {
            console.log("OK : " + URL);
            this.qrImage = url;
            this.historyProvider.addHistory(this.qrText);
        }).catch((err) => {
            console.log("ERROR : " + err);
        })
    }

    share() {
        this.socialSharing.share('This is my QR Code', 'Share my QR Code', this.qrImage).then((res) => {
            console.log("OK : " + res);
        }).catch((err) => {
            console.log("ERROR : " + err);
        });
    }

}
