import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HeroesListComponent }    from './heroes-list.component';
import { HeroDetailComponent }  from './heroes-detail.component';
import { HeroesService } from './heroes.service';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroesListComponent,
    HeroDetailComponent
  ],
  providers: [ ]
})
export class HeroesModule {}