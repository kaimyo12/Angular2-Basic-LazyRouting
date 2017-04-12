import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';
import 'rxjs/add/operator/switchMap';

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

    constructor(private route: Router,
                private service: HeroesService){}

    ngOnInit()
    {
        this.route.
    }
}