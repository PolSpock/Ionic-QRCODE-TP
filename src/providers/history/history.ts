import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class HistoryProvider {

    private historyList: Array<{ text: string, createdAt: string }> = [];

    constructor(public http: HttpClient) {}

    public addHistory(history) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' };
        let dateNow = new Date().toLocaleDateString('fr-FR', options);

        console.log(dateNow);

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
