import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroesService } from './heroes.service'

@Component({
    template: `<h3> Heroes</h3>
    <ul class="heroes">
        <li *ngFor = "let hero of heroes | async">
            <span class="badge">{{hero.id}}</span>
            {{hero.name}}
        </li>
    </ul>
    `
})

export class HeroesListComponent implements OnInit
{
    heroes: Hero[];
    constructor(private service: HeroesService){}

    ngOnInit()
    {
        this.service.getHeroes()
        .then(heroes => this.heroes = heroes)
    }
}