import { Component, OnInit } from '@angular/core';
import { Crisis } from './crisis';

@Component({
    template: 
    `
        <div *ngIf = "crisis">
        </div>
    `
})

export class CrisisDetailComponent implements OnInit
{
    crisis: Crisis;

    ngOnInit()
    {

    }
}