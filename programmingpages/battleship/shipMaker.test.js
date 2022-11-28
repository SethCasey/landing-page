import { Ship } from "./src/shipMaker.js"

test("Ship of less than 1 length fails to create", () => {
  let newship = new Ship(-1, 0, 0, 0);
  expect(newship.hitbox).toBeUndefined();
})

test("Ship hitbox is created properly, testing bounds", () => {
  let newShip = new Ship(2, 0, 0, 0);
  expect(newShip.hitbox).toEqual({start:[0,0], end:[1,0]});
  expect(newShip.hitbox).not.toEqual({start:[0,0], end:[2,0]});
  expect(newShip.hitbox).not.toEqual({start:[0,0], end:[0,2]});
})


test("Ship direction orients ship properly", () => {
  let newship = new Ship(2, 0, 0, 1);
  expect(newship.hitbox).toEqual({start:[0,0], end:[0, 1]});
  expect(newship.hitbox.end).not.toEqual([1,0]);
})

test("shipname.hit() returns true and increments hitsTaken", () => {
  let newship = new Ship(3, 0, 0, 0);
  expect(newship.hitsTaken).toEqual(0);
  expect(newship.hit()).toBeTruthy();
  expect(newship.hitsTaken).toEqual(1);
  for (let i = 0; i < newship.length-1; i++) {
    newship.hit();
  }
  expect(newship.hitsTaken).toEqual(3);
})

test("sunk method returns false when hitsTaken < length, true when hitsTaken >= length", () => {
  let firstship = new Ship(3, 0, 0, 0);
  for (let i = 0; i < firstship.length; i++) {
    firstship.hit()
  }
  expect(firstship.sunk()).toBe(false);
  let newship = new Ship(3, 0, 0, 0);
  for (let i = 0; i <= newship.length; i++) {
    newship.hit();
  }
  expect(newship.sunk()).toBe(true);
})
