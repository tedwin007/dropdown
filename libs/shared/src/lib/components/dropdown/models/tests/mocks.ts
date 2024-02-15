import {SelectTree} from "../interfaces/tree.interfaces";
import {CheckboxState} from "../enums/checkbox-state.enum";


export const selectTree: SelectTree = {
  checked: CheckboxState.checked,
  collapsible: true,
  label: 'Root',
  level: 0,
  id: '0',
  children: [{
    id: '0.1',
    level: -1,
    label: 'Docs',
    children: [{
      id: '0.1.1',
      level: 0,
      children: [],
      label: 'Home',
      collapsible: false,
      collapsed: true,
      checked: CheckboxState.unchecked,
    }],
    collapsible: false,
    collapsed: true,
    checked: CheckboxState.checked
  }, {
    id: '0.2',
    level: 0,
    label: 'Work',
    children: [{
      id: '0.2.1',
      level: 0,
      children: [{
        id: '0.2.2',
        level: 0,
        children: [{
          id: '0.2.1.1',
          children: [],
          level: 0,
          label: 'Work - child 1.2.1',
          collapsible: false,
          collapsed: true,
          checked: CheckboxState.unchecked,
        }, {
          id: '0.2.1.2',
          children: [],
          level: 0,
          label: 'Work - child 1.2.1',
          collapsible: false,
          collapsed: true,
          checked: CheckboxState.unchecked,
        }],
        label: 'Work - child 1.1',
        collapsible: false,
        collapsed: true,
        checked: CheckboxState.unchecked
      }],
      label: 'Work - child 1.1',
      collapsible: false,
      collapsed: true,
      checked: CheckboxState.unchecked
    },

    ],
    collapsible: false,
    collapsed: true,
    checked: CheckboxState.unchecked
  }],
}


