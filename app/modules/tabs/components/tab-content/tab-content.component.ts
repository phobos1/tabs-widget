import { Component, Input, OnInit } from '@angular/core';
import { TabsService } from '../../services/tabs.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'tab-content',
    templateUrl: './tab-content.component.html',
    styleUrls: ['./tab-content.component.css'],
})
export class TabContentComponent implements OnInit {
    @Input() name: string;

    public activeTabName$: Observable<string>;

    constructor(private tabsService: TabsService) {
    }

    public ngOnInit(): void {
        this.activeTabName$ = this.tabsService.activeTabName$;
    }
}
