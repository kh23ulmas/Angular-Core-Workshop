import { Component } from '@angular/core';

@Component({
  selector: 'angular-core-workshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular core workshop';
  links = [
    {path: '/', icon:'home', title:'Home'},
    {path: '/projects', icon:'work', title:'Project'},
    {path: '/customers', icon:'face', title:'Customer'}
  ]
}
