import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisEndComponent } from './crisis-end.component';

const crisisRoutes: Routes = [
//    {
  //    path:'',
    //  redirectTo:'/crises-center',
     // pathMatch: 'full'
    //},
    {
      path: '',
      component: CrisisCenterComponent,
      children: [
        {
          path: '',
          component: CrisisEndComponent,
        },
        //{
         // path: '',
          //component: CrisisEndComponent
       // }
      ]
    },
    {
      path:':id',
      component: CrisisDetailComponent
    }
  ];


@NgModule({
    imports: [RouterModule.forChild(crisisRoutes)],
    exports: [RouterModule]
})

export class CrisisRoutingModule{}