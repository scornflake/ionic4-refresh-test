import {AfterViewInit, Component} from '@angular/core';
import {interval, Subject} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
    rows$: Subject<Array<any>> = new Subject<Array<any>>();

    ngAfterViewInit() {
        interval(1000).subscribe(r => {
            this.makeMoreRows();
        });
    }

    private makeMoreRows() {
        const rows = [];
        for (let i = 0; i < 5; i++) {
            rows.push(`Row ${i * Math.random()}`);
        }
        this.rows$.next(rows);
    }
}
