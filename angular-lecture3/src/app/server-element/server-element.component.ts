import { Component, OnInit, Input } from '@angular/core';
import { ServerElement } from '../app.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // @Input 속성으로 상위 컴포넌트에 공유 가능 - srvElement (alias)로 바인딩
  @Input('srvElement') element: ServerElement;

  constructor() { }

  ngOnInit(): void {
    
  }
}
