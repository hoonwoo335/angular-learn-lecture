import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learn-app2';
  leadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.leadedFeature = feature;
  }
}
