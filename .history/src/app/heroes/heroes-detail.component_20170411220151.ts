import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
    template: `<h3> Hero Detail</h3>

    <div *ngIf="hero">
    </div>
    `
})

export class HeroDetailComponent implements OnInit
{
    editHeroName: string;
    hero: Hero;

    ngOnInit()
    {

    }
}