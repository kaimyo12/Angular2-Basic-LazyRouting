import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './heroes-detail.component';
import { HeroesListComponent } from './heroes-list.component';
import { Routes, RouterModule } from '@angular/router';

const heroRoutes: Routes = [
    { path: '', component: HeroesListComponent },
    { path: 'heroes/:id', component: HeroDetailComponent }
]

@NgModule({
    imports: [RouterModule.forChild(heroRoutes)],
    exports: [RouterModule]
})

export class HeroesRoutingModule{}