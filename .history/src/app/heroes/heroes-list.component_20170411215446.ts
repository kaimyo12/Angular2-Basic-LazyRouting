import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroesService } from './heroes.service'
import { Router } from '@angular/router';

@Component({
    template: `<h3> Heroes</h3>
    <ul class="heroes">
        <li *ngFor = "let hero of heroes" (click)="onSelect(hero)">
            <span class="badge">{{hero.id}}</span>
            {{hero.name}}
        </li>
    </ul>

    <div *ngIf="selectedHero">
        <h3> My favorite hero is {{selectedHero.name}}</h3>
        <button (click) = "gotoDetails()"> View Details</button>
    </div>
    `
})

export class HeroesListComponent implements OnInit
{
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private service: HeroesService
                private router: Router){}

    onSelect(hero: Hero)
    {
        this.selectedHero = hero;
    }

    ngOnInit()
    {
        this.service.getHeroes()
        .then(heroes => this.heroes = heroes)
    }

    gotoDetails()
    {
        this.router.navigate([''])
    }
}