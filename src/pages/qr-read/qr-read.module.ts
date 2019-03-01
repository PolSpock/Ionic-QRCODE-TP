import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrReadPage } from './qr-read';

@NgModule({
  declarations: [
    QrReadPage,
  ],
  imports: [
    IonicPageModule.forChild(QrReadPage),
  ],
})
export class QrReadPageModule {}
