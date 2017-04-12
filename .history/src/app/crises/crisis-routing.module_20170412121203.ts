import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';

const crisisRoutes =
[
    { path: '', redirectTo:'/crisis-center', pathMatch: 'full' },
    
]