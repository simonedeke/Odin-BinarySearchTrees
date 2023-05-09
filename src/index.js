
import { Tree } from "./Tree.js";




let inputArray = [];

for(let i = 0; i < 17; i++) {
    inputArray[i] = Math.floor(Math.random() * 500);
}
inputArray.push(15);
inputArray.push(15);

const myTree = Tree(inputArray);
console.log(myTree.isBalanced());

console.log(myTree.levelOrder());

console.log(myTree.inorder());

console.log(myTree.preorder());

console.log(myTree.postorder());

for(let i = 0; i < 150; i++){
    myTree.myInsert((Math.floor(Math.random() * 500)));
}

console.log(myTree.isBalanced());
myTree.rebalance();
console.log(myTree.isBalanced());

console.log(myTree.levelOrder());

console.log(myTree.inorder());

console.log(myTree.preorder());

console.log(myTree.postorder());
