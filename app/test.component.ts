import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'test',
    template: `
        <div>
            TestComponent {{ this.tab }} content
        </div>
    `,
})
export class TestComponent implements OnInit {
    @Input() tab: string;

    public ngOnInit() {
        console.log(`>>> TestComponent ${ this.tab } initialized`);
    }
}
