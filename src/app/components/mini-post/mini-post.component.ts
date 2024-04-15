import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mini-post',
  templateUrl: './mini-post.component.html',
  styleUrls: ['./mini-post.component.css']
})
export class MiniPostComponent {

  minipostClass: MiniPostClass = new MiniPostClass("#","pic07.jpg","","Lorem") // Obligation d'utiliser le constructeur
  minipostDefault: MiniPostClassWithDefault = new MiniPostClassWithDefault();
  @Input() minipost: MiniPost = {
    alt: "",
    src: "pic07.jpg",
    href: "#",
    text: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam."
  }
  constructor() {
    this.minipostClass.src = undefined
    this.minipostDefault.src= "pic.07.jpg"
  }
}

export class MiniPostClass {
  href: string;
  src?: string;
  alt: string;
  text: string;


  constructor(href: string, src: string, alt: string, text: string) {
    this.href = href;
    this.src = src;
    this.alt = alt;
    this.text = text;
  }
}

export class MiniPostClassWithDefault {
  href: string = "#";
  src?: string;
  alt: string = "Image alt";
  text: string = "Lorem";
}

export interface MiniPost {
  href: string;
  src?: string;
  alt: string;
  text: string;
}
