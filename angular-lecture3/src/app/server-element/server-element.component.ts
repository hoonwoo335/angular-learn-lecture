import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { ServerElement } from '../app.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  // @Input 속성으로 상위 컴포넌트에 공유 가능 - srvElement (alias)로 바인딩
  @Input('srvElement') element: ServerElement;
  @Input() name: string;

  constructor() { 
    console.log("server.component constructor called!");
  }

  ngOnInit(): void {
    console.log("server.component ngOnInit called!");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("server component ngOnChanges called!");
    console.log("server components changes - ", changes);
  }  

  //앵귤러가 변경을 감지할때 마다 호출
  ngDoCheck(): void {
    console.log("server.component ngDoCheck called!");
  }
}
