import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';


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
  providers: [ HeroesService ]
})
export class HeroesModule {}