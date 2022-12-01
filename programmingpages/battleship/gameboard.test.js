import { Gameboard } from "./src/gameboard.js"
import { Ship } from "./src/shipMaker.js"

test("Gameboard creates a gameboard", () => {
  let newboard = new Gameboard([5,5]);
  expect(newboard.gridsize).toEqual([5,5]);
})

test("Predefined ships are accessible", () => {
  let newgame = new Gameboard;;
  
  expect(newgame.shipDict.carrier).toEqual(5);
  expect(newgame.shipDict["battleship"]).toEqual(4);
  expect(newgame.shipDict.destroyer).toEqual(3);
  expect(newgame.shipDict.submarine).toEqual(3);
  expect(newgame.shipDict.patrolboat).toEqual(2);
})


test("all ships are sunk with new allShipsAreSunk() method", () => {
  let newgame = new Gameboard;
  expect(newgame.allShipsAreSunk()).toEqual(true);
})

test("New putShipsOnBoard method works properly", () => {
  let newgame = new Gameboard;
  expect(newgame.putShipOnBoard("battleship", newgame.shipDict.battleship, 0, 0)).toEqual(true);
})

test("ReceiveAttack properly registers hit and miss", () => {
  let newgame = new Gameboard;
  expect(newgame.putShipOnBoard("carrier", newgame.shipDict.battleship, 0, 0)).toEqual(true);
  expect(newgame.receiveAttack(0)).toEqual(true);
  expect(newgame.receiveAttack(10)).toEqual(false);
  expect(newgame.prevMisses.length).toEqual(1);
  expect(newgame.prevHits.length).toEqual(1);  
})

test("Testing off-by-one error on ship placement", () => {
  let newgame = new Gameboard;
  newgame.putShipOnBoard("battleship", newgame.shipDict["battleship"], 0, 0);
  expect(newgame.receiveAttack(4)).toEqual(false);
  expect(newgame.prevHits.length).toEqual(0);
  expect(newgame.prevMisses.length).toEqual(1);
})