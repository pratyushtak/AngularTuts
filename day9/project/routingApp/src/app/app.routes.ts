import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { ContactUs } from './components/contact-us/contact-us';
import { QueryComp } from './components/query-comp/query-comp';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Dashboard } from './components/dashboard/dashboard';
import { authaGuard } from './guard/autha-guard';
import { StateComp } from './components/state-comp/state-comp';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: Home
    },
    {
        path: 'about',
        title: 'About',
        component: About
    },
    {
        path: 'contact-us',
        title: 'ContactUs',
        component: ContactUs
    },
    {
        path: 'query-route',
        title: 'Query',
        component: QueryComp    
    },
    {
        path: 'query-route/state-detail',
        title: 'State',
        component: StateComp
    },
    {
        path: 'dashboard',
        title: 'Dashboard',
        component: Dashboard,
        canActivate: [authaGuard]
    },
    {
        path: '**',
        title: 'Error: 404',
        component: PageNotFound
    }
];
