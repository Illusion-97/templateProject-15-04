import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  parentSearchValue: string = "Parent Search Value"

  minipost8 = {
    alt: '',
    src: 'pic08.jpg',
    href: '#',
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  }
  // Output permet de faire savoir que ce composant peut TRANSMETTRE une information à ceux qui l'appellent
  @Output() more : EventEmitter<string> = new EventEmitter<string>();

  moreClicked() {
    this.more.emit("I want More !") // déclenche la transmission d'information
  }

  updateParent(value: string) {
    this.parentSearchValue = value
  }
}
