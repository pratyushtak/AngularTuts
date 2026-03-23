import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { ContactUs } from './components/contact-us/contact-us';
import { QueryComp } from './components/query-comp/query-comp';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Dashboard } from './components/dashboard/dashboard';
import { authaGuard } from './guard/autha-guard';
import { Maharastra } from './components/maharastra/maharastra';
import { Rajasthan } from './components/rajasthan/rajasthan';
import { Gujrat } from './components/gujrat/gujrat';

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
        loadChildren: ()=> import('./query.routes').then(m=>m.routes)
        // loadComponent: ()=> import('./components/query-comp/query-comp').then(m=>m.QueryComp),
        // children: [
        // {
        //     path: 'rajasthan',
        //     loadComponent: () =>
        //     import('./components/rajasthan/rajasthan').then(m => m.Rajasthan),
        // },
        // {
        //     path: 'maharastra',
        //     loadComponent: () =>
        //     import('./components/maharastra/maharastra').then(m => m.Maharastra),
        // },
        // {
        //     path: 'gujrat',
        //     loadComponent: ()=>
        //     import('./components/gujrat/gujrat').then(m=>m.Gujrat)
        // }
        // ]
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
