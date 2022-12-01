import { Gameboard } from "./src/gameboard.js";
import { Ship } from "./src/shipMaker.js"

test("Ship initializes properly", () => {
  let ship = new Ship;
  expect(ship.hitsTaken).toEqual(0);
  expect(ship.hitbox.length).toEqual(0)
})
