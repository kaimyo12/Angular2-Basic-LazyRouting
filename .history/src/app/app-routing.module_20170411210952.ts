import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
    { path: '**', component: PageNotFoundComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
    ]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule],
    declarations:[PageNotFoundComponent]
})

export class AppRoutingModule{}