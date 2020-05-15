import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { TabsModule } from './modules/tabs/tabs.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,

        TabsModule,
    ],
    declarations: [
        AppComponent,
        HelloComponent,
        TestComponent,
    ],
    bootstrap: [AppComponent],
    schemas: [],
})
export class AppModule {
}
