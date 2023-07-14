import { Component } from '@angular/core';
import { ServerData, ServerElement } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-learn-lecture3'
  serverElements: ServerElement[] = [
    new ServerElement('server', 'Testserver', 'Just a test!')
  ];

  onServerAdded(serverData: ServerData) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: ServerData) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  
  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }
}
