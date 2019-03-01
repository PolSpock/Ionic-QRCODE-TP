import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrHistoryPage } from './qr-history';

@NgModule({
  declarations: [
    QrHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(QrHistoryPage),
  ],
})
export class QrHistoryPageModule {}
