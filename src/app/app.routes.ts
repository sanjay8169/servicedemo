import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { IronmanComponent } from './ironman/ironman.component';
import { SpidermanComponent } from './spiderman/spiderman.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:"",component:AppComponent},
    {path:"ironman" , component : IronmanComponent},
    {path:"spiderman", component : SpidermanComponent}
];
