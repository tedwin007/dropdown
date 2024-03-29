import {TreeNode} from "./interfaces/tree.interfaces";
// ! nodeMap does not belong here, should be in a service
export const nodeMap = new Map();

export abstract class AbstractBaseTree<N extends TreeNode, T extends N> implements TreeNode {
  protected constructor(public label: string, public id: string, children: N[]) {
    nodeMap.set(id, this)
    this.children = this.init(children)
  }

  children: T[];
  level = 0

  abstract createNode(node: TreeNode, level: number, parentNode?: TreeNode): T;

  protected init(nodes: N[], level = 0, parentNode?: TreeNode): T[] {
    return nodes.map((node: TreeNode) => {
      node.children = this.init(node.children, level + 1, node);
      const res = this.createNode(node, level, parentNode)
      nodeMap.set(res.id, res)
      return res
    })
  }
}


