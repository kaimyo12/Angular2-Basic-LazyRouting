import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisEndComponent } from './crisis-end.component';
import { PageNotFoundComponent } from '../page-not-found.component';

const crisisRoutes: Routes = [
    {
      path: '',
      component: CrisisCenterComponent,
      children: [
        {
          path: '',
          component: CrisisListComponent,
          children: [
        {
          path: '',
          component: CrisisListComponent
        , children:[
          {
          path: '',
          component: CrisisEndComponent
        }
        ]
        }
          ]
        },
      ]
    },
    {
      path:':id', 
      component: CrisisDetailComponent
    },
    { path: '**', component: PageNotFoundComponent }
  ]; // set for the crisisendcomp to show up, i used another children here

  // {
  //     path: '',
  //     component: CrisisCenterComponent,
  //     children: [
  //       {
  //         path: '',
  //         component: CrisisListComponent,
  //       },
  //       {
  //         path: '',
  //         component: CrisisEndComponent
  //       }
  //     ]
  //   },
  //   {
  //     path:':id',
  //     component: CrisisDetailComponent
  //   }
  // ]; //doesn't show the end component


@NgModule({
    imports: [RouterModule.forChild(crisisRoutes)],
    exports: [RouterModule]
})

export class CrisisRoutingModule{}