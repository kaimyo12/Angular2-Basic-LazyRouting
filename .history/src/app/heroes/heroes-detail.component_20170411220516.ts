import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router, Params } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
    template: `<h3> Hero Detail</h3>
    <div *ngIf="hero">
        <h2> {{editHeroName}}</h2>
        <div>
        <label> ID: </label>
        {{hero.id}}
        </div>
        <input [(ngModel)] = "editHeroName" placeholder = "Hero Name"/>
    </div>
    `
})

export class HeroDetailComponent implements OnInit
{
    editHeroName: string;
    hero: Hero;

    constructor(private route: Router){}

    ngOnInit()
    {

    }
}