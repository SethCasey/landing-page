import { Ship } from "./src/shipMaker.js"

// create traits for battleship that will return a battleship with lenght of 4
// set up Ship factory function to return a ship
let battleshipLength = 4
let testShip = Ship(battleshipLength);

test('When ship created, hits are 0', () => {
  expect(testShip.hitsTaken).toEqual(0);
})

test('When ship is created, sunk is false', () => {
  expect(testShip.sunk()).toEqual(false);
})

test('When "hit" function called without an argument, \
hit counter increases and returns current count', () => {
  // testShip.hitsTaken = testShip.hit();
  expect(testShip.hit()).toEqual(1);
}) 

test('After other functions are called, all attributes remain', () => {
  expect(testShip.length).toEqual(4);
})

test('Objects saves and remember how many times it was hit', () => {
  for (let i = 0; i <= testShip.length; i++) {
    testShip.hit();
  };
  expect(testShip.hitsTaken).toEqual(6);
})

test('Ship hit "length" or greater times returns true for "isSunk"', () => {
  for (let i = 0; i <= testShip.length; i++) {
    testShip.hit();
  };
  expect(testShip.sunk()).toEqual(true);
})
let horizontalShip = Ship(battleshipLength, 0, 0); // default horizontal ship at x=0, y=0, direction=0 (horizontal)

let newNewShip = Ship(3, )

test('Ship exists along horizontal direction for length of ship', () => {
  expect(horizontalShip.strike([0,3])).toEqual(true);
})

test('Ship does NOT exist path [0,4]', () => {
  expect(horizontalShip.strike([0,4])).toEqual(false);
})

test('Ship does NOT exist along vertical direction for length of ship', () => {
  expect(horizontalShip.strike([1,0])).toEqual(false);
})

let verticalShip33length2 = Ship(2, 3, 3);
test('verticalShip33length2 exists at 3,3', () => {
  expect(verticalShip33length2.strike([3,3])).toEqual(true);
})

test('verticalShip33length2 does not exist at 3,6', () => {
  expect(verticalShip33length2.strike([3,6])).toEqual(false);
})

test('verticalShip33length2 does NOT exist at 0,0', () => {
  expect(verticalShip33length2.strike([0,0])).toEqual(false);
})