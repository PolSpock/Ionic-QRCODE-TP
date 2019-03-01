import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

    private historyList: Array<{ text:string, createdAt: Date }> = [];

    constructor(public http: HttpClient) {}

    public addHistory(history) {
        let dateNow = new Date();
        dateNow.toLocaleDateString('fr-FR');

        this.historyList.push({
            text: history,
            createdAt: dateNow
        });
        console.log("INFO " + this.historyList)
    }

    public getHistory() {
        return this.historyList;
    }

}
