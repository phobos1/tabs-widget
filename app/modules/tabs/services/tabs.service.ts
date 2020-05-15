import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';


@Injectable()
export class TabsService implements OnDestroy {
    private tabNames: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

    private readonly activeTabName: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    public readonly activeTabName$: Observable<string> = this.activeTabName.asObservable();

    private subscription: Subscription = new Subscription();

    constructor() {
        this.subscription.add(this.defaultActive());
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public setActive(name: string): void {
        this.activeTabName.next(name);
    }

    public addTab(name: string): void {
        const newTabs = [...this.tabNames.getValue(), name];
        this.tabNames.next(newTabs);
    }

    public removeTab(name: string): void {
        const newTabs = this.tabNames.getValue()
            .filter(tabName => tabName !== name);
        this.tabNames.next(newTabs);
    }

    private defaultActive(): Subscription {
        return combineLatest(
            this.tabNames,
            this.activeTabName,
        )
            .pipe(
                filter(([tabNames, activeTabName]) =>
                    tabNames.length && (!activeTabName || !tabNames.includes(activeTabName))),
            )
            .subscribe(([tabNames]) => {
                this.setActive(tabNames[0]);
            });
    }
}
