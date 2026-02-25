import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Discover } from './pages/discover/discover';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'discover',
        component: Discover
    }
];
