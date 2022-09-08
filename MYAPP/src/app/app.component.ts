import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MYAPp';
  count=1;

  listOfNUmbers = [1,32,32,55];
  listofcars = ["buggati","maruti","bmw"];



  decreaseCount = ()=> {
  console.log ('Button clicked')
  this.count--;
  }
  increaseCount = ()=> {
  console.log ('Button clicked')
  this.count++;
  }
}
