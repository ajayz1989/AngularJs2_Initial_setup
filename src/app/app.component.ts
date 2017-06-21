import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aj App';
  appBoolean = true;
  appArray = [1,2,3];
  counter : number = 0;
  increment(){
    this.counter++;
  }
}
