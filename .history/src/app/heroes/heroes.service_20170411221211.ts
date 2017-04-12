import { Hero } from './hero';
import { HEROES } from './heroes.data';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService
{
    getHeroes(): Promise<Hero[]>
    {
        return Promise.resolve(HEROES);
    }

    getHero(id: number):Promise<Hero>
    {
        return this.getHeroes
        .then(heroes => heroes.find(hero => hero.id));
    }
}