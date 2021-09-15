import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-demo-project';

  constructor(public router:Router)
  {

  }

  offers()
  {
    this.router.navigate(['']);
  }

}
