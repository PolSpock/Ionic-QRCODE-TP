import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {QrGeneratePage} from "../pages/qr-generate/qr-generate";
import {QrReadPage} from "../pages/qr-read/qr-read";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {QrCodeProvider} from '../providers/qr-code/qr-code';
import {HttpClientModule} from '@angular/common/http';
import {SocialSharing} from "@ionic-native/social-sharing";
import { HistoryProvider } from '../providers/history/history';
import {QrHistoryPage} from "../pages/qr-history/qr-history";
import {Camera} from "@ionic-native/camera";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

@NgModule({
    declarations: [
        MyApp,
        QrGeneratePage,
        QrReadPage,
        QrHistoryPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        QrGeneratePage,
        QrReadPage,
        QrHistoryPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        QrCodeProvider,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        SocialSharing,
        HistoryProvider,
        Camera,
        BarcodeScanner
    ]
})
export class AppModule {
}
