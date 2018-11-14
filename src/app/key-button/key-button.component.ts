import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-key-button",
  templateUrl: "./key-button.component.html",
  styleUrls: ["./key-button.component.css"]
})
export class KeyButtonComponent implements OnInit {
  @Input()
  key: any;
  @Input()
  stack: Array<string>;
  @Input()
  tempValue: string;

  @Output()
  stackValue: any = new EventEmitter<any>();
  @Output()
  keyEmit: any = new EventEmitter<any>();
  @Output()
  clearEmit: any = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public keyInput(type, value) {
    this.keyEmit.emit({
      type: type,
      value: value
    });
  }
}
