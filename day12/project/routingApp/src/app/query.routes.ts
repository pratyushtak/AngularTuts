import { Routes } from "@angular/router";


export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=> import('./components/query-comp/query-comp').then(m=>m.QueryComp)
    },
    {
        path: 'rajasthan',
        loadComponent: ()=> import('./components/rajasthan/rajasthan').then(m=> m.Rajasthan),
    },
    {
        path: 'maharastra',
        loadComponent: ()=> import('./components/maharastra/maharastra').then(m=>m.Maharastra),
    },
    {
        path: 'gujrat',
        loadComponent: ()=> import('./components/gujrat/gujrat').then(m=>m.Gujrat)
    }
]