import {Component} from '@angular/core';
import {selectTree, SelectTree} from "@tw/shared";

@Component({
  selector: 'tw-root',
  template: `
    <header>AppDom</header>

    <section class="container">
      <tw-dropdown class="dropdown"
                   [dropDownTree]="dropDown">
      </tw-dropdown>
    </section>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  protected dropDown: SelectTree = selectTree;
}

