import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';


@NgModule({
    declarations: [
        TabsComponent,
        TabComponent,
        TabContentComponent,
    ],
    exports: [
        TabsComponent,
        TabComponent,
        TabContentComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class TabsModule {
}
