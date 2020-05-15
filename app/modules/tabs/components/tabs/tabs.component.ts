import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges, OnDestroy,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { TabsService } from '../../services/tabs.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TabsService],
})
export class TabsComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    /** active tab name */
    @Input() activeTab: string;

    private subscription: Subscription = new Subscription();

    constructor(private tabsService: TabsService) {
    }

    public ngOnInit(): void {
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if ('activeTab' in changes) {
            this.tabsService.setActive(changes.activeTab.currentValue);
        }
    }

    public ngAfterViewInit(): void {
        setTimeout(() => {
            this.subscription.add(this.tabsService.defaultActive());
        }, 0);
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
