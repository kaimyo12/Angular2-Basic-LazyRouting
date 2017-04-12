import { Component, OnInit } from '@angular/core';
import { Crisis } from './crisis';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CrisisService } from './crisis.service';

@Component({
    template: 
    `
         <div *ngIf="crisis">
      <h2>{{ editTitle }}</h2>
      <div>
        <label>id: </label>{{crisis.id}}
      </div>
      <div>
        <label>Title: </label>
        <input [(ngModel)] = "editTitle" placeholder="Crisis title"/>
      </div>
    <button (click)= "save()">Save</button>
    <button (click)= "cancel()">Cancel</button>
    </div>
    
    `
})

export class CrisisDetailComponent implements OnInit
{
    crisis: Crisis;
    editTitle: string;

    constructor(private route: ActivatedRoute, private router:Router
                ,private service: CrisisService){}

    ngOnInit()
    {
        this.route.params
        .switchMap((params: Params) => this.service.getCrisis(+params['id']))
        .subscribe((crisis : Crisis) =>
        {
            this.crisis = crisis;
            this.editTitle = this.crisis.title;
        });
    }
}