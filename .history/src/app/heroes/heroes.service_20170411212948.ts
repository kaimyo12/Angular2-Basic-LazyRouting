import { Hero } from './hero';
import { HEROES } from './heroes.data';

export class HeroesService
{
    getHeroes: Promise<Hero[]>()
    {
        return Promise.resolve(HEROES);
    }
}