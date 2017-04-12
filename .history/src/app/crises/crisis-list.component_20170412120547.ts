import { Component } from '@angular/core';
import { Crisis } from './crisis';
import { CrisisService } from './crisis.service';

@Component({
    template: ``
})

export class CrisisListComponent
{
    crisis: Crisis;

    constructor(private service: CrisisService){}
}