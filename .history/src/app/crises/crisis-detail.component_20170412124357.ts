import { Component, OnInit } from '@angular/core';
import { Crisis } from './crisis';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CrisisService } from './crisis.service';

@Component({
    template: 
    `
        <div *ngIf = "crisis">
            <label>ID Number:  {{crisis.id}}</label>
            <h3> {{editTitle}} details</h3>
            <input [(ngModel)] = "editTitle" />
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
            this.editTitle = crisis.title;
        })
    }
}