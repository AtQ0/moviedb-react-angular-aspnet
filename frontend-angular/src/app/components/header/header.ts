import { Component } from "@angular/core";
import { LucideAngularModule } from 'lucide-angular';
import { SearchBar } from "../search-bar/search-bar";
import { RouterLink } from "@angular/router";



@Component({
    selector: 'app-header',
    imports: [LucideAngularModule, SearchBar, RouterLink],
    template: `
     <header>
            <nav class="flex flex-col gap-2">
                <div class="flex items-center justify-between font-bold relative h-10 sm:hidden">
                    <a routerLink="/">Movies</a>    
                    <lucide-icon name="menu" class="w-6 h-6 pointer-events-none"></lucide-icon>
                </div>
                <div class="sm:h-15 flex items-center">
                    <app-search-bar class="w-full"/>
                </div>
            </nav>
        </header>
    `
})
export class Header { }