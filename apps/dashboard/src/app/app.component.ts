import { Component } from '@angular/core';

@Component({
  selector: 'ngrx-species-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: './species', icon: 'work', title: 'Species' },
  ]
}
