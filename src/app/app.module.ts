import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { KeyButtonComponent } from "./key-button/key-button.component";
import { CalculatorService } from "./calculator.service";
import { DisplayerComponent } from './displayer/displayer.component';
// import { UserComponent } from './components/user/user.component';
// import { UsersComponent } from './components/users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    KeyButtonComponent,
    DisplayerComponent
    // UserComponent,
    // UsersComponent
  ],
  imports: [BrowserModule],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
