import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HeroesListComponent }    from './heroes-list.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService } from './heroes.service';
import { HeroRoutingModule } from './heroes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [ HeroService ]
})
export class HeroesModule {}