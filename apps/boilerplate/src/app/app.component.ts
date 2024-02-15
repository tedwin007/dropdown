import {Component} from '@angular/core';
import {selectTree} from "../../../../libs/shared/src/lib/components/dropdown/models/tests/mocks";
import {DropDownTree} from "../../../../libs/shared/src/lib/components/dropdown/models/select-tree.class";

@Component({
  selector: 'tw-root',
  template: `
    <header>AppDom</header>

    <section class="container">
      <tw-dropdown class="dropdown" [dropDown]="dropDown"></tw-dropdown>
    </section>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  protected dropDown: DropDownTree = new DropDownTree(selectTree.label,selectTree.id,selectTree.children);
}

