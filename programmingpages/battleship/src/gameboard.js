import { Ship } from "./shipMaker.js"

export class Gameboard { // one of these is made for each player!
  // constructor(gridsize = 100) { // default dimensions are 10x10
  constructor (rowLength = 10, colHeight = 10) {
    if (rowLength * colHeight < 0) {
     return false
    }
    this.rowLength = rowLength;
    this.colHeight = colHeight;
    // if (gridsize < 0) {
    //   return false
    // }
    this.gridsize = this.rowLength * this.colHeight;
    this.ships = [];
    this.shipLocations = [];
    this.prevHits = [];
    this.prevMisses = [];
    this.shipsSunk = 0;
  }

  shipDict = {
    "carrier": 5,
    "battleship": 4,
    "destroyer": 3,
    "submarine": 3,
    "patrolboat": 2,
  }
  
  putShipOnBoard(type, length, direction, startSquare) {
    /*
    direction of 0 == horizontal
    direction of !0 == vertical
    */
    if (!this.shipDict[type]) {
      console.log(`Yip. Activated. ${this.shipDict[type]}`)
      return false
    }
    // test if ship goes out of bounds
    /* 
      Pseudo code...
      implement custom grid sizes...
      user must input row length and column height

      if ship is horizontal:
        check whether start position + length > user determined row length
      
      if ship is vertical:
        test if any position is less than 0 or greater than row length * column height
    */
    if (direction == 0) { // horizontal bounds test
      if ((startSquare%this.rowLength)+length > this.rowLength) {
        return false;
      } 
    } else { // vertical bounds test
      // currently broken...
      if ((startSquare + length) > (this.rowLength * this.colHeight) || startSquare + length < 0) {
        return false;
      }
    }

    for (let i = 0; i < length; i++) { // test for other ship in any of the potential placed squares
      if (direction == 0) {
        if (this.shipLocations.includes(startSquare)) {
          return false
        }
      } else {
        if (this.shipLocations.includes(startSquare + (i * 10))) {
          return false
        }
      }
    }
    let ship = new Ship;
    this.shipLocations.push(ship.placeShip(startSquare, this.shipDict[type], direction));
    delete(this.shipDict[type]);
    return true
  }

  receiveAttack(attackSquare) {
    // in receiveAttack, any previous hits are recorded as a string in the form of x,y.
    // This is because apparently array.prototype.includes() doesn't quite work when
    // searching for arrays within arrays
    if (this.prevHits.includes(attackSquare) || this.prevMisses.includes(attackSquare)) {
      return false
    }
    for (let x = 0; x < this.shipLocations.length; x++) {
      if (this.shipLocations[x].includes(attackSquare)) {
        this.shipLocations[x].splice(attackSquare, 1);
        this.prevHits.push(attackSquare);
        this.allShipsAreSunk();
        return true
      }
    }
    this.prevMisses.push(attackSquare);
    return false
  }

  allShipsAreSunk() {
    if (this.shipLocations.length == 0) {
      return true
    }
    return false
  }
}
