import { Component , OnInit} from '@angular/core';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';
import { Router } from '@angular/router';

@Component({
    template: `
    <h3> Crisis List</h3>
    <ul>
        <li *ngFor = "let crisis of crises" (click) = "onSelect(crisis)">
            <span> {{crisis.id}}</span>
                {{crisis.title}}
        </li>
    </ul>
    <router-outlet> </router-outlet>
    `
})

export class CrisisListComponent implements OnInit
{
    crisis: Crisis;
    crises: Crisis[];
    selectedCrisis: Crisis;

    constructor(private service: CrisisService){}

    ngOnInit()
    {
        this.service.getCrises()
        .then(crises => this.crises = crises);
    }

    onSelect(crisis: Crisis)
    {
        this.selectedCrisis = crisis;
    }

    goToDetails()
    {

    }
}