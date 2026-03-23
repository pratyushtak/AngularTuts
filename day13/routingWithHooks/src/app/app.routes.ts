import { Routes } from '@angular/router';
import { Child } from './components/child/child';
import { Home } from './components/home/home';
import { Parent } from './components/parent/parent';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: Home
    },
    {
        path: 'parent',
        title: 'Parent',
        component: Parent
    }
];
