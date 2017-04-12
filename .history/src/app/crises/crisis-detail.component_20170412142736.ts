import { Component, OnInit } from '@angular/core';
import { Crisis } from './crisis';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { CrisisService } from './crisis.service';

@Component({
    template: 
    `   <br/>
        <div *ngIf = "crisis">
            <label>ID Number:  {{crisis.id}}</label>
            <h3> {{editTitle}}</h3>
            <input [(ngModel)] = "editTitle" placeholder="Crisis Title"/>
        <div>
        <button (click)= "save()">Save</button>
        <button (click)= "cancel()">Cancel</button>
        </div>
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

gotoCrisis() {
   let crisisId = this.crisis ? this.crisis.id : null;
  // Pass along the Crisis id if available
  // so that the CrisisList component can select that Crisis.
  // Include a junk 'foo' property for fun.
  this.router.navigate(['../', { id: crisisId }], { relativeTo: this.route });
}

cancel(){
  this.gotoCrisis();
}

save(){
  this.crisis.title = this.editTitle;
  this.gotoCrisis();
}
}