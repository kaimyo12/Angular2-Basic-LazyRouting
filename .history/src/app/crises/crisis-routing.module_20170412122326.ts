import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';

const crisisRoutes =
[
    { path: '', redirectTo:'/crises-center', pathMatch: 'full' },
    { path: '', component: CrisisCenterComponent,
    children: [
        {
            path: 'l',
            component: CrisisListComponent,
            children: 
            [
                {
                    path: ':id',
                    component: CrisisDetailComponent
                }
            ]
        }
    ]
 }
]

@NgModule({
    imports: [RouterModule.forChild(crisisRoutes)],
    exports: [RouterModule]
})

export class CrisisRoutingModule{}