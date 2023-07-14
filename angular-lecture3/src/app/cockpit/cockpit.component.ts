import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServerData, ServerElement } from '../app.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<ServerData>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<ServerData>();
  
  newServerName: string = '';
  newServerContent: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  onAddServer() {
    if (this.newServerName.length > 0 && this.newServerContent.length > 0) {
      this.serverCreated.emit({
        serverName: this.newServerName, serverContent: this.newServerContent
      });
    }
  }

  onAddBlueprint() {
    if (this.newServerName.length > 0 && this.newServerContent.length > 0) {
      this.blueprintCreated.emit({
        serverName: this.newServerName, serverContent: this.newServerContent
      });
    }
  }
}
