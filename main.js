'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log("hello")
// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
/**
 * 
 * @param {String} startStack 
 * @param {String} endStack 
 */
// Move piece should have @param ; startStack and endStack
const movePiece = (startStack, endStack) => {
  // Your code here
  let donut = stacks[startStack].pop()
  let end = stacks[endStack].toString()
  stacks[endStack].push(donut)

  //Remove 
  //Before you move, you should check if the move is actually allowed. Should 3 be able to be stacked?
  //This function should return true if the proposed move is legal,
  //or false if the proposed move is not legal
  //NOTE: this method shouldn't change the board
  //it is only checking if the move is legal or not
  //startStack- the name of the stack they want to move the piece from
  //endStack- the name of the stack they want to move the piece to

}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {

  let firstPeice = stacks[startStack].toString()
  let endPeice = stacks[endStack].toString()
 
  let lastOfStarting = firstPeice.charAt(firstPeice.length - 1)
  let lastOfEnding = endPeice.charAt(endPeice.length - 1)
  console.log('the value of start stack: ', lastOfStarting)
  console.log('the value of end stack: ', lastOfEnding)

  if(stacks[endStack].length === 0){
    return true
  }

  if (lastOfStarting > lastOfEnding) {
    // console.log('This is an illegal move!')
    return false
  }
  return true
}


  // Your code here
  //the piece we want to move needs to be smaller than the smallest piece ; 4 on top of 3...
//always leave the biggest donut at the bottom of the peg.
//move piece is legal ... is referee and 
//check for win judges if you win or not
//towers of hanoi is the main function for this game


// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  if (stacks.c.length === 4 || stacks.b.length === 4){
    return  true
  }
  else return false

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  if(isLegal(startStack, endStack) === false){
    return console.log("This is an illegal move")
  }
  movePiece(startStack, endStack)
  if(checkForWin() === true) {
    return true
  }
  else {
    return false
  }
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      if(towersOfHanoi(startStack, endStack) === true){
        return console.log("You Won")
      };
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
