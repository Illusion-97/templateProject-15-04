import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // private title: string | undefined; Déclaration de variable en TS {visibilité} nomDeVariable : <type> | <autreType>
  // par défaut les variables de classe dans un composant sont 'public'
  @Input() title? : string = "default Title" // équivalent : title : string | undefined; ajouter un ? au nom d'une variable la rend "optionnelle", elle accepte la valeur undefined
  // @Input indique que ce composant est prêt à recevoir une information depuis le composant qui l'appellera dans son template html.
  // La valeur actuelle est considérée comme valeur par défaut et écrasée UNIQUEMENT si une autre est fournie.


  private a: number = 0 // private exclus l'utilisation de la variable dans le template html
  protected b: number = 1 // utilisable par le template et les classes enfants

  @Input("author") privateTitle: string = "private Title"

  // get et set permettent de CREER des variables disposant de comportements lors de leur utilisation
  get publicTitle() : string {
    return this.privateTitle
  }

  set publicTitle(value: string ) {
    this.privateTitle = value
  }

}
