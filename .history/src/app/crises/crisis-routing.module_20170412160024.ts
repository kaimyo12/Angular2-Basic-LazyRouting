import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisEndComponent } from './crisis-end.component';
import { CrisisPageNotFoundComponent } from './crisis-pagenotfound.component';

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
      path:'crises-center/:id', // take the crises-center off when you do lazy loading
      component: CrisisDetailComponent
    },
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