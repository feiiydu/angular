import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Nonggap';
  result = "hi";
  data = "";
  username = "";

  onPress(event: any) {
    console.log(event.target.value)
    this.result = event.target.value
  }

  doSth() {
    console.log("click")
    this.result = "Click!!"
  }
}
