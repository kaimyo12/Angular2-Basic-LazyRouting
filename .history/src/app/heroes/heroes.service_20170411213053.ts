import { Hero } from './hero';
import { HEROES } from './heroes.data';
import { Injectable } from '@angular/core';

export class HeroesService
{
    getHeroes: Promise<Hero[]>
    {
        return Promise.resolve(HEROES);
    }
}