import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-show-me',
    templateUrl: './show-me.component.html',
    styleUrls: ['./show-me.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowMeComponent implements OnInit {
    @Input() rows;

    constructor() {
    }

    ngOnInit() {
    }

}
