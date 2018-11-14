import { Component, OnInit } from "@angular/core";
import { CalculatorService } from "../calculator.service";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"],
  providers: [CalculatorService]
})
export class CalculatorComponent implements OnInit {
  private keys: Array<any>;

  constructor(private api: CalculatorService) {}

  ngOnInit() {
    this.keys = [
      { value: "C", type: "fun" },
      { value: "+/-", type: "fun" },
      { value: "%", type: "fun" },
      { value: "/", type: "operator" },
      { value: "7", type: "num" },
      { value: "8", type: "num" },
      { value: "9", type: "num" },
      { value: "*", type: "operator" },
      { value: "4", type: "num" },
      { value: "5", type: "num" },
      { value: "6", type: "num" },
      { value: "-", type: "operator" },
      { value: "1", type: "num" },
      { value: "2", type: "num" },
      { value: "3", type: "num" },
      { value: "+", type: "operator" },
      { value: "0", type: "num", bold: true },
      { value: ".", type: "num" },
      { value: "=", type: "operator" }
    ];
  }

  public onKeyEmit(data: any) {
    console.log(data);
    this.api.keyInput(data.type, data.value);
  }
}
