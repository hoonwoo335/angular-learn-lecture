import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ServerData, ServerElement } from '../app.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<ServerData>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<ServerData>();
  
  //newServerName: string = '';
  //newServerContent: string = '';

  // Dom element에 직접 접근해서 값을 가져오는 방식
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
    
  }

  /* onAddServer() {
    if (this.newServerName.length > 0 && this.newServerContent.length > 0) {
      this.serverCreated.emit({
        serverName: this.newServerName, serverContent: this.newServerContent
      });
    }
  } */

  onAddServer(nameInput: HTMLInputElement) {
    console.log('nameInput - ', nameInput.value);

    // ViewChild를 쓰는 참조의 경우
    // this.serverContentInput.nativeElement.value = "ㅁㅁㅁ" 직접 값을 변경하지 않도록 한다.
    if (nameInput.value.length > 0) {
      this.serverCreated.emit({
        serverName: nameInput.value, 
        serverContent: this.serverContentInput.nativeElement.value
      });
    }
  }

  /* onAddBlueprint() {
    if (this.newServerName.length > 0 && this.newServerContent.length > 0) {
      this.blueprintCreated.emit({
        serverName: this.newServerName, serverContent: this.newServerContent
      });
    }
  } */

  onAddBlueprint(nameInput: HTMLInputElement) {
    if (nameInput.value.length > 0) {
      this.blueprintCreated.emit({
        serverName: nameInput.value, 
        serverContent: this.serverContentInput.nativeElement.value
      });
    }
  }
}
