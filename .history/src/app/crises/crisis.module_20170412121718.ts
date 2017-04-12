import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent } from './crisis-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisRoutingModule
  ],
  declarations: [
 
  ],
  providers: [  ]
})
export class CrisisModule {}