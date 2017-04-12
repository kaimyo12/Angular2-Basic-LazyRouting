import { Component , OnInit} from '@angular/core';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';

@Component({
    template: `
    <ul>
    
    </ul>
    `
})

export class CrisisListComponent implements OnInit
{
    crisis: Crisis;
    crises: Crisis[];

    constructor(private service: CrisisService){}

    ngOnInit()
    {
        this.service.getCrises()
        .then(crises => this.crises = crises);
    }
}