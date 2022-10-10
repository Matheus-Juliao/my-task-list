import { Component } from '@angular/core';

@Component({
  	selector: 'app-root',
  	template: `
  		<!-- <router-outlet></router-outlet> -->
		<app-food-add></app-food-add>
        <app-food-list></app-food-list>
	`
})
export class AppComponent {}