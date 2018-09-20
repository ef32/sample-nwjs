import { Component } from '@angular/core';

import { Router } from '@angular/router';  
           // Add this


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Turf';

  constructor(private router: Router) { }

  onChipSetChange(event) {
    console.log(event);
    this.router.navigate(['dashboard']);

  }

}
