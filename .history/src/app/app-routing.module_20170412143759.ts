import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { CrisisModule } from './crises/crisis.module';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // be careful at positioning the paths
    { path: 'crisis-center', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
    { path: '**', component: PageNotFoundComponent }, // make sure to make this last
    ]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}