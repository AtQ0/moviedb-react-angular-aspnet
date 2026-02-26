import { Component, signal } from "@angular/core";
import { LucideAngularModule } from 'lucide-angular';
import { NavLinks } from "../nav-links/nav-links";

@Component({
    selector: 'app-sidebar-trigger',
    imports: [LucideAngularModule, NavLinks],
    templateUrl: './sidebar-trigger.html',
})
export class SidebarTrigger {

    isOpen = signal(false);

    toggleSidebar(): void {
        this.isOpen.set(!this.isOpen());
    }
}