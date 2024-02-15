// import {selectTree} from "./mocks";
//
// describe('SelectTree', () => {
//
//   let tree: BaseTree
//   beforeEach(() => {
//     tree = new BaseTree(selectTree);
//     console.log(tree)
//   })
//
//   it('should instantiate Tree', () => {
//     expect(tree).toBeDefined();
//     expect(tree.config.collapsible).toEqual(true);
//   })
//
//   describe('collapsible', () => {
//     describe('collapsible is true', () => {
//       beforeEach(() => {
//         tree = new BaseTree({children: selectTree.children, collapsible: true});
//       })
//
//       it('should apply collapsible option to all the nodes with at least one child', () => {
//         expect(tree.config.collapsible).toEqual(true);
//         const collapsiblesArray = tree.config.children[0].children
//           .map((item:any) => item.collapsible)
//           .every((val:any) => val == true)
//
//         expect(collapsiblesArray).toEqual(true)
//       })
//     })
//
//     describe('collapsible is false', () => {
//       beforeEach(() => {
//         tree = new BaseTree({children: selectTree.children, collapsible: true});
//       })
//     })
//   })
//
//   describe('Node Level', () => {
//     it('should define node level currently', () => {
//       expect(tree.config.children[0].children[0].level).toEqual(3);
//     })
//   })
// })
