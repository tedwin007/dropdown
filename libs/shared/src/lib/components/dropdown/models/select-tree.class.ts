import {SelectNode, TreeNode} from "./interfaces/tree.interfaces";
import {CheckboxState} from "./enums/checkbox-state.enum";
import {AbstractBaseTree, nodeMap} from "./abstract-base-tree.class";

// todo: init nodes checkbox state on instantiation
/**
 *
 */
export class DropDownTree extends AbstractBaseTree<SelectNode, NodeWithCheckBox> {
  private _searchTokens = new Map<string, NodeWithCheckBox[]>();

  constructor(label: string, id: string, children: SelectNode[], public collapsible = true) {
    super(label, id, children);
  }

  createNode(node: TreeNode, level: number, parentNode: TreeNode): NodeWithCheckBox {
    return new NodeWithCheckBox(
      node.children,
      level,
      node.label,
      node.id,
      this.collapsible,
      parentNode?.id,
    )
  }

  filterByText(token: string): NodeWithCheckBox[] {
    if (!token) return this.children;
    if (this._searchTokens.has(token)) return this._searchTokens.get(token) || [];
    const res = this.filterChildren(token, this.children, new Set());
    this._searchTokens.set(token, res);
    return res
  }

  filterChildren(token: string, children: NodeWithCheckBox[], result = new Set()): NodeWithCheckBox[] {
    children.forEach((item) => {
      if (!result.has(item.parentId)) {
        if (item.label.toLowerCase().includes(token.toLowerCase())) {
          result.add(item.id)
        }
        if (item.children?.length) {
          this.filterChildren(token, item.children, result)
        }
      }
    })
    return Array.from(result).map((item) => nodeMap.get(item));
  }
}

export class NodeWithCheckBox {
  public collapsed = true;

  constructor(
    public children: NodeWithCheckBox[],
    public level: number,
    public label: string,
    public id: string,
    public collapsible = true,
    public parentId?: string,
    public checked = CheckboxState.unchecked) {
    this.collapsed = this.collapsible;
  }

  toggleCollapseState():void {
    if (this.collapsible) {
      this.collapsed = !this.collapsed
    }
  }

  markAs(status: CheckboxState): void {
    this.checked = status;
    const parent: NodeWithCheckBox = nodeMap.get(this.parentId)
    if (parent) this.traversalParents(parent, status);
    this.children = this.traversalChildren(this.children, status);
  }

  traversalChildren(nodes: NodeWithCheckBox[], status: CheckboxState): NodeWithCheckBox[] {
    return nodes.map((item: NodeWithCheckBox) => {
      item.checked = status;
      if (item.children.length) this.traversalChildren(item.children, status);
      return item
    })
  }

  traversalParents(parent: NodeWithCheckBox, status: CheckboxState):void {
    const areAllChildrenChecked = this.getAreAllChildrenChecked(parent);
    const areAllChildrenUnChecked = this.getAreAllChildrenUnChecked(parent);
    parent.checked = this.getCheckStatus(areAllChildrenChecked, status, areAllChildrenUnChecked);
    parent = nodeMap.get(parent?.parentId)
    if (parent) this.traversalParents(parent, status);
  }

  private getCheckStatus(areAllChildrenChecked: boolean, status: CheckboxState, areAllChildrenUnChecked: boolean):CheckboxState {
    return areAllChildrenChecked ? status : areAllChildrenUnChecked ? CheckboxState.unchecked : CheckboxState.indeterminate;
  }

  private getAreAllChildrenUnChecked(parent: NodeWithCheckBox): boolean {
    return parent?.children.every((item) => item.checked === 0);
  }

  private getAreAllChildrenChecked(parent: NodeWithCheckBox): boolean {
    return parent?.children.every((item) => item.checked === 1);
  }

}
