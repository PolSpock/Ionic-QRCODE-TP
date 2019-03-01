import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {QrCodeProvider} from "../../providers/qr-code/qr-code";

@IonicPage()
@Component({
    selector: 'page-qr-read',
    templateUrl: 'qr-read.html',
})
export class QrReadPage {
    private qrText: string = '';

     constructor(
         private barcodeScanner: BarcodeScanner,
         private qrCodeProvider: QrCodeProvider) { }

     fromCamera() {
         this.barcodeScanner.scan().then((qrData) => {
             console.log("OK : " + qrData);
             this.qrText = qrData.text;
         });
     }

     async fromImage() {
         this.qrCodeProvider.decodeFromImage().then((res) => {
             console.log("OK : " + res);
            this.qrText = res;
         }).catch((err) => {
             console.log("ERROR : " + err);
         })

         /*
         try {
             const base64 = await this.camera.getPicture({
                 quality: 100,
                 sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                 destinationType: this.camera.DestinationType.DATA_URL,
                 encodingType: this.camera.EncodingType.JPEG,
                 mediaType: this.camera.MediaType.PICTURE
             });

             this.qrText = await this.qrCodeProvider.decode('data:image/jpeg;base64,' + base64);
         } catch (e) {
             this.qrText = null;
         }
         */
     }

}
