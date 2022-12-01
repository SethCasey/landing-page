import { Player } from "./src/player.js"

test("Player's predefined ships are accessible", () => {
  let newplayer = new Player;
  
  expect(newplayer.shipDict.carrier).toEqual(5);
  expect(newplayer.shipDict.battleship).toEqual(4);
  expect(newplayer.shipDict.destroyer).toEqual(3);
  expect(newplayer.shipDict.submarine).toEqual(3);
  expect(newplayer.shipDict.patrolboat).toEqual(2);
}
)