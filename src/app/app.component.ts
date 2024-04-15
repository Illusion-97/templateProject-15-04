import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentTitle = 'templateProject';

  moreReaction(value: string) {
    console.log("It says : " + value)
  }
}
