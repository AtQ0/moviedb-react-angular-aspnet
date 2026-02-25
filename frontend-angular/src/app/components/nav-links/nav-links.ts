import { Component } from '@angular/core';
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
    links = [
        { label: 'Home', path: '/', icon: 'house' },
        { label: 'Discover', path: '/discover', icon: 'compass' }
    ];
}