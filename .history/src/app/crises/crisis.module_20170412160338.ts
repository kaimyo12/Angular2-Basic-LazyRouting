import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisService } from './crisis.service';
import { CrisisEndComponent } from './crisis-end.component';
import { CrisisPageNotFoundComponent } from './crisis-pagenotfound.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisDetailComponent,
    CrisisListComponent,
    CrisisEndComponent,
    CrisisPageNotFoundComponent
  ],
  providers: [ CrisisService ]
})
export class CrisisModule {}