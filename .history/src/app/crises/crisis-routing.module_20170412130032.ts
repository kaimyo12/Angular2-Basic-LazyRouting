  import { NgModule }             from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { CrisisListComponent }       from './crisis-list.component';
  import { CrisisCenterComponent }     from './crisis-center.component';
  import { CrisisDetailComponent }     from './crisis-detail.component';
 
  const crisisCenterRoutes: Routes = [
    {
      path:'',
      redirectTo:'/crises-center',
      pathMatch: 'full'
    },
    {
      path: '',
      component: CrisisCenterComponent,
      children: [
        {
          path: '',
          component: CrisisListComponent,
          children: [
            {
              path: ':id',
              component: CrisisDetailComponent,
              }          ]
        }
      ]
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(crisisCenterRoutes)
    ],
    exports: [
      RouterModule
    ],
  })
  export class CrisisCenterRoutingModule { }
