import { Hero } from './hero';
import { HEROES } from './heroes.data';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService
{
    getHeroes: Promise<Hero[]>
    {
        return Promise.resolve(HEROES);
    }
}