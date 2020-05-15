import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';


@Injectable()
export class TabsService {
    private tabNames: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

    private readonly activeTabName: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    public readonly activeTabName$: Observable<string> = this.activeTabName.asObservable();

    constructor() {
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

    public defaultActive(): Subscription {
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
