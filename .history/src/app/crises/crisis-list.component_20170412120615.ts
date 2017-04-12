import { Component , OnInit} from '@angular/core';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';

@Component({
    template: ``
})

export class CrisisListComponent implements OnInit
{
    crisis: Crisis;
    crises: Crisis[];

    constructor(private service: CrisisService){}


}