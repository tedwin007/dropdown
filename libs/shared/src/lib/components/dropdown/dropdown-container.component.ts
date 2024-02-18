import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DropdownTreeComponent} from "./dropdown-tree/dropdown-tree.component";
import {CommonModule} from "@angular/common";
import {SelectTree} from "./models/interfaces/tree.interfaces";
import {DropDownTree, NodeWithCheckBox} from "./models/select-tree.class";
import {SearchbarComponent} from '../searchbar/searchbar.component';

@Component({
  selector: 'tw-dropdown',
  template: `
    <ng-container *ngIf="_dropDown">
      <div class="searchbar-container">
        <tw-searchbar (searchChange)="inMemorySearch($event)"></tw-searchbar>
      </div>
      <dropdown-tree class="checkbox-dropdown" [nodes]="children"></dropdown-tree>
    </ng-container>
  `,
  styles: [`
    dropdown-tree {
      overflow: auto;
    }

    :host {
      display: grid;
      max-height: 450px;
      overflow: hidden;
      padding: 10px;
      justify-content: center;
      grid-template-rows: 0.25fr 1fr auto;
      grid-row-gap: 40px;
      box-shadow: 10px 10px 10px 10px lightgrey;
    }

    .searchbar-container {
      position: relative;
      height: inherit;
    }

    .searchbar-container::after {
      position: absolute;
      left: 0;
      bottom: -20px;
      width: 100%;
      content: ' ';
      height: 1px;
      background: lightgrey;
    }

  `],
  standalone: true,
  imports: [
    DropdownTreeComponent,
    SearchbarComponent,
    CommonModule,
  ]
})
export class DropdownContainerComponent {
  // see 'In Memory Search' comment
  @Output() searchChange = new EventEmitter<string>()
  // onChange is not implemented, for concept use only
  @Output() onChange = new EventEmitter<string>()
  protected _dropDown!: DropDownTree;
  protected children!: NodeWithCheckBox[];

  @Input() set dropDownTree(tree: SelectTree) {
    this._dropDown = new DropDownTree(tree.label, tree.id, tree.children, tree.collapsible)
    this.children = this._dropDown.children;
  }

  /**
   * In Memory Search
   *
   * This is only an example of implementation (in-memory). (I guess it is supposed to work)
   * you might want to send "onSearch" as an output and implement the search there.
   * Or alternatively, you only want to have an interface of search functionality and get the implementation from the "user"
   * @param token
   */
  inMemorySearch(token: string): void {
    this.children = this._dropDown.filterByText(token);
    this.searchChange.emit(token);
  }
}
