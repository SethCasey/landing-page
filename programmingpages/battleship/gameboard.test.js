import { Gameboard } from "./src/gameboard.js"
import { Ship } from "./src/shipMaker.js"

test("Gameboard creates a gameboard", () => {
  let newboard = new Gameboard([5,5]);
  expect(newboard.dimensions).toEqual([5,5]);
})

test("Adds a ship", () => {
  let newboard = new Gameboard([5,5]);
  newboard.addShip(2, 0, 0, 0);
  expect(newboard.ships[0].hitbox.end).toEqual([1,0]);
  expect(newboard.ships[0].hitbox.start).toEqual([0,0])
})

test("Testing off-by-one errors on adding ship", () => {
  let newboard = new Gameboard([5,5]);
  newboard.addShip(4,0,0,0);
  expect(newboard.ships[0].hitbox.end).toEqual([3,0]);
  expect(newboard.ships[0].hitbox.start).toEqual([0,0]);
  expect(newboard.ships[0].hitbox.end).not.toEqual([4,0])
  expect(newboard.ships[0].hitbox.start).not.toEqual([-1,0])
  expect(newboard.ships[0].hitbox.end).not.toEqual([2,0])
})

test("Testing vertical orientation", () => {
  let newboard = new Gameboard([5,5]);
  newboard.addShip(4,0,0,1);
  expect(newboard.ships[0].hitbox.start).toEqual([0,0]);
  expect(newboard.ships[0].hitbox.end).toEqual([0,3]);
  expect(newboard.ships[0].hitbox.end).not.toEqual([3,0]);
})

test("receiveAttack method properly registers hits", () => {
  let newboard = new Gameboard([5,5]);
  newboard.addShip(4,0,0,1);
  for (let i = 0; i < newboard.ships[0].length; i++) {
    expect(newboard.receiveAttack([0, i])).toEqual(true);
  }
  expect(newboard.receiveAttack([0, 4])).toEqual(false);
  expect(newboard.receiveAttack([1,0])).toEqual(false);
})

test("receiveAttack method rejects duplicate hits", () => {
  let newboard = new Gameboard([5,5]);
  newboard.addShip(1,0,0,0);
  expect(newboard.receiveAttack([0,0])).toEqual(true);
  expect(newboard.receiveAttack([0,0])).toEqual(false);
})

test("receiveAttack method records previous misses", () => {
  let newboard = new Gameboard([5,5]);
  newboard.addShip(1,4,4,0);
  expect(newboard.receiveAttack([0,0])).toEqual(false);
  expect(newboard.prevMisses.length > 0).toEqual(true);
})

test("When all ships report sunk, (or no ships exist), allShipsSunk() reports true", () => {
  let newgame = new Gameboard([5,5]);
  for (let i = 0; i < newgame.ships.length; i++) {
    expect(newgame.allShipsSunk()).toEqual(true);
  }
  newgame.addShip(2,0,1,1);
  newgame.addShip(3,0,0,0);
  let firstShipShots = [[0,1], [0,2]];
  let secondShipShots = [[0,0],[1,0],[2,0]];
  for (let x = 0; x < firstShipShots.length; x++) {
    newgame.receiveAttack(firstShipShots[x]);
  }
  for (let x = 0; x < secondShipShots.length; x++) {
    newgame.receiveAttack(secondShipShots[x]);
  }
  expect(newgame.allShipsSunk()).toEqual(true);
})