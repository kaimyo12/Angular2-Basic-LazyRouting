import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
     { path: '', redirectTo: '/login', pathMatch: 'full' }, // be careful at positioning the paths
    { path: '**', component: PageNotFoundComponent }, // make sure to make this last
    ]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}