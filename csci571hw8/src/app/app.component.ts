import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideOutAnimation} from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [slideOutAnimation]
})
export class AppComponent {
 /* prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }*/
}
