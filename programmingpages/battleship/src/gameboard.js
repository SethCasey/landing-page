import { Ship } from "./shipMaker.js"

export class Gameboard {
  constructor(dimensions = [0,0]) {
    if (dimensions[0] < 0 || dimensions[1] < 0) {
      return
    }
    this.dimensions = dimensions;
    this.ships = [];
    this.prevHits = [];
  }

  addShip(length, positionX, positionY, direction) {
    let newship = new Ship(length, positionX, positionY, direction)
    if (newship != undefined) {
      this.ships.push(newship);
    }
  }

  receiveAttack([x,y]) { 
    if (this.prevHits.includes([x,y])) {
      return false;
    }
    for (let i = 0; i < this.ships.length; i++) {
      let xExists = false;
      let yExists = false;
      for (let j = this.ships[i].hitbox.start[0]; j <= this.ships[i].hitbox.end[0]; j++) {
        if (x == j) {
          xExists = true;
          break
        }
      }
      for (let k = this.ships[i].hitbox.start[1]; k <= this.ships[i].hitbox.end[1]; k++) {
        if (y == k) {
          yExists = true;
          break
        }
      }
      if (xExists && yExists) {
        this.prevHits.push([x,y]);
        return true;
      }
      return false;
    }

    // strike([x,y]) {
    //       let yExists = false;
    //       let xExists = false;
    //       for (let i = hitbox.start[0]; i <= hitbox.end[0]; i++) { // checking x-axis values
    //         if (i == x) {
    //           xExists = true;
    //         }
    //       }
    //       for (let i = hitbox.start[1]; i <= hitbox.end[1]; i++) { // checking y-axis values
    //         if (i == y) {
    //           yExists = true;
    //         }
    //       }
    //       if (xExists && yExists) {
    //         return true;
    //       } else {
    //         return false;
    //       }
    //     },

  }
}

//   // Create Gameboard factory.

// //     Note that we have not yet created any User Interface. We should know our code is 
// // coming together by running the tests. You shouldn’t be relying on console.logs or DOM 
// // methods to make sure your code is doing what you expect it to.

// //     Gameboards should be able to place ships at specific coordinates by calling the 
// // ship factory function.

// //     Gameboards should have a receiveAttack function that takes a pair of coordinates,
// //  determines whether or not the attack hit a ship and then sends the ‘hit’ function 
// // to the correct ship, or records the coordinates of the missed shot.

// //     Gameboards should keep track of missed attacks so they can display them properly.

// //     Gameboards should be able to report whether or not all of their ships have been sunk.


// export const Gameboard = (x = 10, y = 10,) => {
 
//   let currentId = 0;
//   let ships = [];
//   let borders = [x, y]; // max number for board x dimension or y dimension, AND nothing below 0

//   return {
//     borders,

//     strike([x,y]) {
//       let yExists = false;
//       let xExists = false;
//       for (let i = hitbox.start[0]; i <= hitbox.end[0]; i++) { // checking x-axis values
//         if (i == x) {
//           xExists = true;
//         }
//       }
//       for (let i = hitbox.start[1]; i <= hitbox.end[1]; i++) { // checking y-axis values
//         if (i == y) {
//           yExists = true;
//         }
//       }
//       if (xExists && yExists) {
//         return true;
//       } else {
//         return false;
//       }
//     },
  
//     addShip(playerId, length, posx, posy, direction) {
//       let shipId = currentId; // assign id number to use as key in Gameboard object's dictionary
//       this.currentId++; // increment gameboard object's currentId so no two ships will have the same ID
//       playerId = playerId; // assign ship player's id

      
//       if (posx > borders[0] || posy > borders[1] || posx < 0 || posy < 0) {
//         return "The ship must stay within the borders of the gameboard"
//       };

      
//       let newShip = Ship(length, posx, posy, direction);
//       this.ships.push({
//         "id": shipId,
//         "player": playerId,
//         "hitbox": newShip.hitbox,
//       } )
//     }
//   }


// }