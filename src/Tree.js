import { biNode } from "./biNode.js";

export const Tree = (inputArray) => {

    let _root = buildTree(inputArray);



    function buildTree(list){
        if(list.length === 0){
            return null;
        }
        list = list.sort((a,b) => a-b);
        //remove duplicates
        list = (() => {
            return [...new Set(list)];
        })();
         
        const mid = Math.floor(list.length / 2);
        const root = biNode(list[mid], null, null);
        const q = [[root, [0,mid-1]], [root, [mid+1, list.length - 1]]];

        while(q.length > 0) {
            const [parent, [left, right]] = q.shift();

            if(left <= right && parent != null) {
                const mid = Math.floor((left + right) / 2);
                const child = biNode(list[mid], null, null);

                if (list[mid] < parent.value){
                    parent.left = child;
                } else {
                    parent.right = child;
                }

                q.push([child, [left, mid-1]]);
                q.push([child, [mid+1, right]]);
            }
        }
        return root;
    }

    function myInsert(value){
        let bNode = biNode(value, null, null);
        if(!_root) {
            _root = bNode;
            return;
        }

        let prev = null;
        let tmp = _root;

        while (tmp) {
            if(tmp.value == value){
                console.log("Value already exists in Tree");
                return;
            }
            if(tmp.value > value) {
                prev = tmp;
                tmp = tmp.left;
            }
            else if (tmp.value < value){
                prev = tmp;
                tmp = tmp.right;
            }
        }
        if(prev.value > value){
            prev.left = bNode;
        }
        if(prev.value < value) {
            prev.right = bNode;
        }
        console.log('inserted');
    }

    function myDelete(value){
        let current = _root;
        let previous = null;

        while(current !== null && current.value !== value){
            //if no match and not null, keep moving down left or right
            previous = current;
            if(value < current.value) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        console.log(current);
        //current is now the node to be deleted
        if (current === null) {
            console.log("Value not found in tree");
        }

        if(current.left === null || current.right === null) {
            //only has 1 child
            let newCurrent = null;
            //newCurrent is the node to be put in deleted node's place
            if(current.left === null){
                newCurrent = current.right;
            }//set newCurrent to whichever one was not null
            else {
                newCurrent = current.left;
            }

            //is the node to be deleted the root?
            if(previous === null) {
                return newCurrent;
            }

            // if node to be deleted was left/right child, 
            // replace delete node w newCurrent via the parent node pointer
            if(current === previous.left) {
                previous.left = newCurrent;
            }
            else {
                previous.right = newCurrent;
            }
            
            current = null;
        }
        else { // node has 2 chilren
            let parent = null;
            let tmp = current.right;
            //find the first left node w no left nodes in the right tree;
            while(tmp.left !== null) {
                parent = tmp;
                tmp = tmp.left;
            }

            //
            if(parent !== null) {//change 1 level up parent pointer
                parent.left = tmp.right;
            }
            else{//node to be moved has no left children, attach its right
                // tree to the deleted node spot's right
                current.right = tmp.right;
            }
            //change deleted node value to node being replaced with value
            current.value = tmp.value;
            tmp = null;
        }
    }
    function find(value){
        let current = _root;
        let previous = null;

        while(current !== null && current.value !== value){
            //if no match and not null, keep moving down left or right
            previous = current;
            if(value < current.value) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        //current is now the found node or null
        if (current === null) {
            console.log("Value not found in tree");
        }
        return(current);
    }
    function levelOrder(userFunction){
        let outputArray = [];
        if (_root == null){
            return null;
        }
        let que = [_root];
        while(que.length > 0) {
            let viewingNode = que.shift();
            if(viewingNode.left) {
                que.push(viewingNode.left);
            }
            if(viewingNode.right) {
                que.push(viewingNode.right);
            }
            if(userFunction){
                userFunction(viewingNode);
            }
            else {
                outputArray.push(viewingNode.value);
            }
        }
        if(!userFunction){
            return outputArray;
        }
    }
    function inorder(userFunction){
        const stack = [];
        const outputArray = [];
        let current = _root;

        while(stack.length || current){
            while(current) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop()
            if(userFunction){
                userFunction(current);
            }
            outputArray.push(current.value);
            current = current.right;
        }
        
        if(!userFunction){
            return outputArray;
        }
    }
    function preorder(userFunction){
        const stack = [_root];
        const outputArray = [];
        let current = null;

        while(stack.length){
            current = stack.pop();
            if(current.right){
                stack.push(current.right);
            }
            if(current.left){
                stack.push(current.left);
            }
            if(userFunction){
                userFunction(current.value);
            }
            outputArray.push(current.value);
        }
        if(!userFunction){
            return outputArray;
        }
    }
    function postorder(userFunction){
        const childNodes = [_root];
        const parentNodes = [];
        const outputArray = [];
        let current = null;

        while(childNodes.length){
            current = childNodes.pop();
            if(current.left){
                childNodes.push(current.left);
            }   
            if(current.right){
                childNodes.push(current.right);
            }
            parentNodes.push(current);
        }

        while(parentNodes.length){
            current = parentNodes.pop();
            if(userFunction){
                userFunction(current);
            }
            else {
                outputArray.push(current.value);
            }
        }

        if(!userFunction){
            return outputArray;
        }
    }
    function height(node){
        let height = 0;
        if (node == null){
            console.log('Node is null');
            return null;
        }
        let que = [node];
        while(true) {
            let levelNodeCount = que.length;
            if(levelNodeCount == 0){
                return height-1;
            }
            height++;

            while(levelNodeCount > 0){
                let viewingNode = que.shift();
                if(viewingNode.left){
                    que.push(viewingNode.left);
                }
                if(viewingNode.right){
                    que.push(viewingNode.right);
                }
                levelNodeCount--;
            }
        }
    }
    function depth(node){
        let current = _root;
        let previous = null;
        let depth = 0;

        while(current !== null && current.value !== node.value){
            //if no match and not null, keep moving down left or right
            previous = current;
            if(node.value < current.value) {
                current = current.left;
                depth++;
            }
            else {
                current = current.right;
                depth++;
            }
        }
        //current is now the found node or null
        if (current === null) {
            console.log("Value not found in tree");
        }
        return(depth);
    }
    function isBalanced(){
        return _isBalanced(_root)[0];
    }
    function _isBalanced(root){
        if(root == null){
            return [true,0];
        }

        let left = _isBalanced(root.left);
        let right = _isBalanced(root.right);

        let leftBal = left[0];
        let rightBal = right[0];

        let diff = Math.abs(left[1] - right[1]) <= 1;

        let balanced = [];

        balanced[1] = Math.max(left[1], right[1]) + 1;

        if(leftBal && rightBal && diff) {
            balanced[0] = true;
        }
        else {
            balanced[0] = false;
        }
        return balanced;
    }
    function rebalance(){
        _root = buildTree(inorder());
    }
    function prettyPrintHelp(){
        prettyPrint(_root);
    }
    const prettyPrint = (node, prefix = '', isLeft = true) => {
        if ((node === null) || (node === undefined)) {
           return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }
      return {buildTree, prettyPrintHelp, myInsert, myDelete, find, levelOrder, inorder, preorder, postorder, height, depth, isBalanced, rebalance};
};