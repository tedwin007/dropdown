import {Component, Input} from '@angular/core';
import {DropdownTreeComponent} from "./dropdown-tree/dropdown-tree.component";
import {SearchbarComponent} from "@tw/shared";
import {CommonModule} from "@angular/common";
import {AbstractBaseTree} from "./models/abstract-base-tree.class";
import {TreeNode} from "./models/interfaces/tree.interfaces";

@Component({
  selector: 'tw-dropdown',
  template: `
    <ng-container *ngIf="dropDown">
      <div class="searchbar-container">
        <tw-searchbar></tw-searchbar>
      </div>
      <dropdown-tree class="checkbox-dropdown" [nodes]="dropDown.children"></dropdown-tree>
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
  @Input() dropDown!: AbstractBaseTree<TreeNode, any>
}
