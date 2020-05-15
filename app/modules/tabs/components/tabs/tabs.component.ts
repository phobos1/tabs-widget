import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TabsService } from '../../services/tabs.service';


@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TabsService],
})
export class TabsComponent implements OnInit, OnChanges {
    /** active tab name */
    @Input() activeTab: string;

    constructor(private tabsService: TabsService) {
    }

    public ngOnInit(): void {
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if ('activeTab' in changes) {
            this.tabsService.setActive(changes.activeTab.currentValue);
        }
    }
}
