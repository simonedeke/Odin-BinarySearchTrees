/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Tree.js":
/*!*********************!*\
  !*** ./src/Tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tree\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _biNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./biNode.js */ \"./src/biNode.js\");\n\r\n\r\nconst Tree = (inputArray) => {\r\n\r\n    let _root = buildTree(inputArray);\r\n\r\n\r\n\r\n    function buildTree(list){\r\n        if(list.length === 0){\r\n            return null;\r\n        }\r\n        list = list.sort((a,b) => a-b);\r\n        //remove duplicates\r\n        list = (() => {\r\n            return [...new Set(list)];\r\n        })();\r\n         \r\n        const mid = Math.floor(list.length / 2);\r\n        const root = (0,_biNode_js__WEBPACK_IMPORTED_MODULE_0__.biNode)(list[mid], null, null);\r\n        const q = [[root, [0,mid-1]], [root, [mid+1, list.length - 1]]];\r\n\r\n        while(q.length > 0) {\r\n            const [parent, [left, right]] = q.shift();\r\n\r\n            if(left <= right && parent != null) {\r\n                const mid = Math.floor((left + right) / 2);\r\n                const child = (0,_biNode_js__WEBPACK_IMPORTED_MODULE_0__.biNode)(list[mid], null, null);\r\n\r\n                if (list[mid] < parent.value){\r\n                    parent.left = child;\r\n                } else {\r\n                    parent.right = child;\r\n                }\r\n\r\n                q.push([child, [left, mid-1]]);\r\n                q.push([child, [mid+1, right]]);\r\n            }\r\n        }\r\n        return root;\r\n    }\r\n\r\n    function myInsert(value){\r\n        let bNode = (0,_biNode_js__WEBPACK_IMPORTED_MODULE_0__.biNode)(value, null, null);\r\n        if(!_root) {\r\n            _root = bNode;\r\n            return;\r\n        }\r\n\r\n        let prev = null;\r\n        let tmp = _root;\r\n\r\n        while (tmp) {\r\n            if(tmp.value == value){\r\n                console.log(\"Value already exists in Tree\");\r\n                return;\r\n            }\r\n            if(tmp.value > value) {\r\n                prev = tmp;\r\n                tmp = tmp.left;\r\n            }\r\n            else if (tmp.value < value){\r\n                prev = tmp;\r\n                tmp = tmp.right;\r\n            }\r\n        }\r\n        if(prev.value > value){\r\n            prev.left = bNode;\r\n        }\r\n        if(prev.value < value) {\r\n            prev.right = bNode;\r\n        }\r\n        console.log('inserted');\r\n    }\r\n\r\n    function myDelete(value){\r\n        let current = _root;\r\n        let previous = null;\r\n\r\n        while(current !== null && current.value !== value){\r\n            //if no match and not null, keep moving down left or right\r\n            previous = current;\r\n            if(value < current.value) {\r\n                current = current.left;\r\n            }\r\n            else {\r\n                current = current.right;\r\n            }\r\n        }\r\n        console.log(current);\r\n        //current is now the node to be deleted\r\n        if (current === null) {\r\n            console.log(\"Value not found in tree\");\r\n        }\r\n\r\n        if(current.left === null || current.right === null) {\r\n            //only has 1 child\r\n            let newCurrent = null;\r\n            //newCurrent is the node to be put in deleted node's place\r\n            if(current.left === null){\r\n                newCurrent = current.right;\r\n            }//set newCurrent to whichever one was not null\r\n            else {\r\n                newCurrent = current.left;\r\n            }\r\n\r\n            //is the node to be deleted the root?\r\n            if(previous === null) {\r\n                return newCurrent;\r\n            }\r\n\r\n            // if node to be deleted was left/right child, \r\n            // replace delete node w newCurrent via the parent node pointer\r\n            if(current === previous.left) {\r\n                previous.left = newCurrent;\r\n            }\r\n            else {\r\n                previous.right = newCurrent;\r\n            }\r\n            \r\n            current = null;\r\n        }\r\n        else { // node has 2 chilren\r\n            let parent = null;\r\n            let tmp = current.right;\r\n            //find the first left node w no left nodes in the right tree;\r\n            while(tmp.left !== null) {\r\n                parent = tmp;\r\n                tmp = tmp.left;\r\n            }\r\n\r\n            //\r\n            if(parent !== null) {//change 1 level up parent pointer\r\n                parent.left = tmp.right;\r\n            }\r\n            else{//node to be moved has no left children, attach its right\r\n                // tree to the deleted node spot's right\r\n                current.right = tmp.right;\r\n            }\r\n            //change deleted node value to node being replaced with value\r\n            current.value = tmp.value;\r\n            tmp = null;\r\n        }\r\n    }\r\n    function find(value){\r\n        let current = _root;\r\n        let previous = null;\r\n\r\n        while(current !== null && current.value !== value){\r\n            //if no match and not null, keep moving down left or right\r\n            previous = current;\r\n            if(value < current.value) {\r\n                current = current.left;\r\n            }\r\n            else {\r\n                current = current.right;\r\n            }\r\n        }\r\n        //current is now the found node or null\r\n        if (current === null) {\r\n            console.log(\"Value not found in tree\");\r\n        }\r\n        return(current);\r\n    }\r\n    function levelOrder(userFunction){\r\n        let outputArray = [];\r\n        if (_root == null){\r\n            return null;\r\n        }\r\n        let que = [_root];\r\n        while(que.length > 0) {\r\n            let viewingNode = que.shift();\r\n            if(viewingNode.left) {\r\n                que.push(viewingNode.left);\r\n            }\r\n            if(viewingNode.right) {\r\n                que.push(viewingNode.right);\r\n            }\r\n            if(userFunction){\r\n                userFunction(viewingNode);\r\n            }\r\n            else {\r\n                outputArray.push(viewingNode.value);\r\n            }\r\n        }\r\n        if(!userFunction){\r\n            return outputArray;\r\n        }\r\n    }\r\n    function inorder(userFunction){\r\n        const stack = [];\r\n        const outputArray = [];\r\n        let current = _root;\r\n\r\n        while(stack.length || current){\r\n            while(current) {\r\n                stack.push(current);\r\n                current = current.left;\r\n            }\r\n            current = stack.pop()\r\n            if(userFunction){\r\n                userFunction(current);\r\n            }\r\n            outputArray.push(current.value);\r\n            current = current.right;\r\n        }\r\n        \r\n        if(!userFunction){\r\n            return outputArray;\r\n        }\r\n    }\r\n    function preorder(userFunction){\r\n        const stack = [_root];\r\n        const outputArray = [];\r\n        let current = null;\r\n\r\n        while(stack.length){\r\n            current = stack.pop();\r\n            if(current.right){\r\n                stack.push(current.right);\r\n            }\r\n            if(current.left){\r\n                stack.push(current.left);\r\n            }\r\n            if(userFunction){\r\n                userFunction(current.value);\r\n            }\r\n            outputArray.push(current.value);\r\n        }\r\n        if(!userFunction){\r\n            return outputArray;\r\n        }\r\n    }\r\n    function postorder(userFunction){\r\n        const childNodes = [_root];\r\n        const parentNodes = [];\r\n        const outputArray = [];\r\n        let current = null;\r\n\r\n        while(childNodes.length){\r\n            current = childNodes.pop();\r\n            if(current.left){\r\n                childNodes.push(current.left);\r\n            }   \r\n            if(current.right){\r\n                childNodes.push(current.right);\r\n            }\r\n            parentNodes.push(current);\r\n        }\r\n\r\n        while(parentNodes.length){\r\n            current = parentNodes.pop();\r\n            if(userFunction){\r\n                userFunction(current);\r\n            }\r\n            else {\r\n                outputArray.push(current.value);\r\n            }\r\n        }\r\n\r\n        if(!userFunction){\r\n            return outputArray;\r\n        }\r\n    }\r\n    function height(node){\r\n        let height = 0;\r\n        if (node == null){\r\n            console.log('Node is null');\r\n            return null;\r\n        }\r\n        let que = [node];\r\n        while(true) {\r\n            let levelNodeCount = que.length;\r\n            if(levelNodeCount == 0){\r\n                return height-1;\r\n            }\r\n            height++;\r\n\r\n            while(levelNodeCount > 0){\r\n                let viewingNode = que.shift();\r\n                if(viewingNode.left){\r\n                    que.push(viewingNode.left);\r\n                }\r\n                if(viewingNode.right){\r\n                    que.push(viewingNode.right);\r\n                }\r\n                levelNodeCount--;\r\n            }\r\n        }\r\n    }\r\n    function depth(node){\r\n        let current = _root;\r\n        let previous = null;\r\n        let depth = 0;\r\n\r\n        while(current !== null && current.value !== node.value){\r\n            //if no match and not null, keep moving down left or right\r\n            previous = current;\r\n            if(node.value < current.value) {\r\n                current = current.left;\r\n                depth++;\r\n            }\r\n            else {\r\n                current = current.right;\r\n                depth++;\r\n            }\r\n        }\r\n        //current is now the found node or null\r\n        if (current === null) {\r\n            console.log(\"Value not found in tree\");\r\n        }\r\n        return(depth);\r\n    }\r\n    function isBalanced(){\r\n        return _isBalanced(_root)[0];\r\n    }\r\n    function _isBalanced(root){\r\n        if(root == null){\r\n            return [true,0];\r\n        }\r\n\r\n        let left = _isBalanced(root.left);\r\n        let right = _isBalanced(root.right);\r\n\r\n        let leftBal = left[0];\r\n        let rightBal = right[0];\r\n\r\n        let diff = Math.abs(left[1] - right[1]) <= 1;\r\n\r\n        let balanced = [];\r\n\r\n        balanced[1] = Math.max(left[1], right[1]) + 1;\r\n\r\n        if(leftBal && rightBal && diff) {\r\n            balanced[0] = true;\r\n        }\r\n        else {\r\n            balanced[0] = false;\r\n        }\r\n        return balanced;\r\n    }\r\n    function rebalance(){\r\n        _root = buildTree(inorder());\r\n    }\r\n    function prettyPrintHelp(){\r\n        prettyPrint(_root);\r\n    }\r\n    const prettyPrint = (node, prefix = '', isLeft = true) => {\r\n        if ((node === null) || (node === undefined)) {\r\n           return;\r\n        }\r\n        if (node.right !== null) {\r\n          prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);\r\n        }\r\n        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);\r\n        if (node.left !== null) {\r\n          prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);\r\n        }\r\n      }\r\n      return {buildTree, prettyPrintHelp, myInsert, myDelete, find, levelOrder, inorder, preorder, postorder, height, depth, isBalanced, rebalance};\r\n};\n\n//# sourceURL=webpack://odin-binarysearchtree/./src/Tree.js?");

/***/ }),

/***/ "./src/biNode.js":
/*!***********************!*\
  !*** ./src/biNode.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"biNode\": () => (/* binding */ biNode)\n/* harmony export */ });\nconst biNode = (value, left, right) => {\r\n    return {value, left, right};\r\n};\n\n//# sourceURL=webpack://odin-binarysearchtree/./src/biNode.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree.js */ \"./src/Tree.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet inputArray = [];\r\n\r\nfor(let i = 0; i < 17; i++) {\r\n    inputArray[i] = Math.floor(Math.random() * 500);\r\n}\r\ninputArray.push(15);\r\ninputArray.push(15);\r\n\r\nconst myTree = (0,_Tree_js__WEBPACK_IMPORTED_MODULE_0__.Tree)(inputArray);\r\nconsole.log(myTree.isBalanced());\r\n\r\nconsole.log(myTree.levelOrder());\r\n\r\nconsole.log(myTree.inorder());\r\n\r\nconsole.log(myTree.preorder());\r\n\r\nconsole.log(myTree.postorder());\r\n\r\nfor(let i = 0; i < 150; i++){\r\n    myTree.myInsert((Math.floor(Math.random() * 500)));\r\n}\r\n\r\nconsole.log(myTree.isBalanced());\r\nmyTree.rebalance();\r\nconsole.log(myTree.isBalanced());\r\n\r\nconsole.log(myTree.levelOrder());\r\n\r\nconsole.log(myTree.inorder());\r\n\r\nconsole.log(myTree.preorder());\r\n\r\nconsole.log(myTree.postorder());\r\n\n\n//# sourceURL=webpack://odin-binarysearchtree/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;