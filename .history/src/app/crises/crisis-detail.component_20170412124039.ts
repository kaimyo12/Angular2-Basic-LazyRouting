import { Component, OnInit } from '@angular/core';
import { Crisis } from './crisis';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    template: 
    `
        <div *ngIf = "crisis">
            <label>ID Number:  {{crisis.id}}</label>
            <h3> {{crisis.title}} details</h3>
        </div>
    `
})

export class CrisisDetailComponent implements OnInit
{
    crisis: Crisis;
    editTitle: string;

    constructor(private route: ActivatedRoute, private router:Router){}

    ngOnInit()
    {
        this.route.params
    }
}