import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-displayer",
  templateUrl: "./displayer.component.html",
  styleUrls: ["./displayer.component.css"]
})
export class DisplayerComponent implements OnInit, OnChanges {
  @Input()
  displayValue: string;

  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    console.log("change");
  }
}
