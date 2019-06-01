import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'angular-todolist';
  name:string = 'Kuba';

  constructor() {
    this.changeName("Jakub");
  }

  changeName(name:string):void {
    this.name = name;
  }
}
