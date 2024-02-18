import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SearchbarDirective} from "./directives/searchbar.directive";

@Component({
  selector: 'tw-searchbar',
  template: `
    <div class="searchbar-container">
      <input type="text" #searchbarInput (input)="searchChange.emit(searchbarInput.value)" class="searchbar-input">
    </div>
  `,
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,
  imports: [CommonModule, SearchbarDirective],
  hostDirectives: [{
    directive: SearchbarDirective,
    outputs: ['onSearch:search'],
  }],
})
export class SearchbarComponent {
  @Output() searchChange = new EventEmitter<string>();

}
