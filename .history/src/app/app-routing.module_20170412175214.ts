import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { CrisisModule } from './crises/crisis.module';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // be careful at positioning the paths
    //{ path: 'crises-center', loadChildren: 'app/crises/crisis.module#CrisisModule' },
    { path: 'heroes' }
    { path: '**', component: PageNotFoundComponent }// make sure to make this last
    ]

    //lazy-loading, always remember the first step is to make the path to an empty string
    //Now create a path in the app-routing.module and add a new router
    //the path that we'll make is the one that will call the lazy module
    //Now in the app.module, remove the crisismodule import and in the array

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}