import { Gameboard } from "./src/gameboard.js";
import { Ship } from "./src/shipMaker.js"

test("Ship initializes properly", () => {
  let ship = new Ship;
  expect(ship.hitbox.length).toEqual(0);
  ship.placeShip(5, 2, 0);
  expect(ship.hitbox.length).toEqual(2);
})
