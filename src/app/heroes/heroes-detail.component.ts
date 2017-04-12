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
        <div>
    <button (click)= "save()">Save</button>
    <button (click)= "cancel()">Cancel</button>
    </div>
    </div>
    `
})

export class HeroDetailComponent implements OnInit
{
    editHeroName: string;
    hero: Hero;

    constructor(private router: Router,
                private service: HeroesService,
                private route: ActivatedRoute){}

    ngOnInit()
    {
        this.route.params
        .switchMap((params: Params) => this.service.getHero(+params['id']))
        .subscribe((hero: Hero)=>
        {
            this.hero = hero;
            this.editHeroName = this.hero.name;
        }
        )
    }

    gotoHeroes() {
   let heroId = this.hero ? this.hero.id : null;
  // Pass along the hero id if available
  // so that the HeroList component can select that hero.
  // Include a junk 'foo' property for fun.
  this.router.navigate(['/heroes', { id: heroId }]);
}

save()
{
  this.hero.name = this.editHeroName;
  this.gotoHeroes();
}

cancel(){
  this.gotoHeroes();
}
}