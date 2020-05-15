import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TabsService } from '../../services/tabs.service';


@Component({
    selector: 'tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.css'],
})
export class TabComponent implements OnInit, OnDestroy {
    @Input() name: string;

    constructor(private tabsService: TabsService) {
    }

    public ngOnInit(): void {
        this.tabsService.addTab(this.name);
    }

    public setActive(): void {
        this.tabsService.setActive(this.name);
    }

    public ngOnDestroy(): void {
        this.tabsService.removeTab(this.name);
    }
}
