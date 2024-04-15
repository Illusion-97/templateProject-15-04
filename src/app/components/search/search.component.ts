import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input() value: string = ""
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  get search(): string {
    return this.value
  }

  set search(newValue: string) {
    this.value = newValue
    this.valueChange.emit(this.value)
  }

  updateValue(event: Event) {
    //@ts-ignore
    //this.value = event.target.value;

    const target: HTMLInputElement = event.target as HTMLInputElement // cast
    this.value = target.value

    this.valueChange.emit(this.value)
  }
}
