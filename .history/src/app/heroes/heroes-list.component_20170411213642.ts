import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroesService } from './heroes.service'

@Component({
    template: ``
})

export class HeroesList implements OnInit
{
    heroes: Hero[];
    constructor(private service: HeroesService){}

    ngOnInit()
    {
        this.service.getHeroes()
        .then(heroes => this.heroes = heroes)
    }
}