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
  expect(newboard.receiveAttack([0,0])).toEqual(true);
  expect(newboard.receiveAttack([0,1])).toEqual(false);
})