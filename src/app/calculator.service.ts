import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CalculatorService {
  key: any;
  stack: Array<string>;
  tempValue: string;
  displayValue: any;

  constructor() {
    this.displayValue = "0";
    this.tempValue = null;
    this.stack = ["0", "+"];
  }

  ngOnInit() {}

  public clear(): void {
    let index = this.stack.length === 3 ? 2 : 0;
    this.stack[index] = "0";
    this.stackRender();
  }

  public keyInput(type, value) {
    if (type === "num") {
      this.numberInput(value);
    } else if (type === "fun") {
      this.functionalityInput(value);
    } else if (type === "operator") {
      this.updateStack(value, type);
    }
  }

  public updateStack(value, type) {
    let length = this.stack.length;
    if (type === "operator") {
      if (value != "=") {
        this.tempValue = null;
      }
      let result = 0;
      let operator = this.stack[1];
      if (this.stack.length == 3 || this.tempValue != null) {
        let first = parseFloat(this.stack[0]);
        let second = this.stack[2]
          ? parseFloat(this.stack[2])
          : parseFloat(this.tempValue);

        if (operator === "+") {
          result = first + second;
        } else if (operator === "-") {
          result = first - second;
        } else if (operator === "*") {
          result = first * second;
        } else if (operator === "/") {
          result = first / second;
        }

        if (Number.isNaN(result) || !Number.isFinite(result)) {
          this.stack[0] = "0";
        } else {
          this.stack[0] = result.toString();
        }
      }

      if (value !== "=") {
        if (this.stack.length == 3) {
          let temp = this.stack[2];
          this.stack[0] = result.toString();
          this.stack[1] = value;
          this.stack.pop();
          this.stackRender();
          this.stack[2] = "0";
        } else {
          this.stack[1] = value;
          this.stack[2] = "0";
        }
        this.tempValue = null;
      } else {
        if (this.stack.length == 3) {
          this.tempValue = this.stack.pop();
        }
        this.stackRender();
      }
    } else if (type === "value") {
    }
  }

  public functionalityInput(value) {
    this.tempValue = null;

    if (value === "C") {
      this.clear();
    } else if (value == "+/-") {
      let index = this.stack.length === 3 ? 2 : 0;
      let curValue = parseFloat(this.stack[index]);
      curValue *= -1;
      this.stack[index] = curValue.toString();
      this.stackRender();
    } else if (value == "%") {
      if (this.stack.length == 2) {
        this.stack[0] = (parseFloat(this.stack[0]) / 100).toString();
      } else {
        this.stack[2] = (parseFloat(this.stack[2]) / 100).toString();
      }
      this.stackRender();
    }
    if (this.stack.length == 3) {
      this.stack.pop();
    }
  }

  public numberInput(value: any) {
    let index = this.stack.length === 3 ? 2 : 0;
    if (value === ".") {
      if (this.stack[index].indexOf(".") === -1) {
        this.stack[index] += value;
      }
    } else {
      this.stack[index] += value;
    }

    if (
      value === "." &&
      this.stack[index].indexOf(".") == this.stack[index].length - 1
    ) {
      this.stackRender(".");
    } else {
      this.stackRender();
    }
  }

  public stackRender(append: string = "") {
    if (this.stack.length === 3) {
      this.displayValue = parseFloat(this.stack[2]).toString();
    } else {
      this.displayValue = parseFloat(this.stack[0]).toString();
    }
  }
}
