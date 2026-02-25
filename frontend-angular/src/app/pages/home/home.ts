import { Component } from "@angular/core";
import { DashBoard } from "../../components/dash-board/dash-board";

@Component({
    selector: 'app-home',
    imports: [DashBoard],
    template: `
    <section class="h-full">
        <app-dash-board />
    </section>
    `,
})
export class Home { }