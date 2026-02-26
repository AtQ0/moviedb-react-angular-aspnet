import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
    selector: 'app-nav-links',
    imports: [
        RouterLink,
        LucideAngularModule
    ],
    templateUrl: './nav-links.html'
})
export class NavLinks {

    @Output() linkClick = new EventEmitter<void>();

    links = [
        { label: 'Home', path: '/', icon: 'house' },
        { label: 'Discover', path: '/discover', icon: 'compass' }
    ];

    onLinkClick() {
        this.linkClick.emit();
    }
}