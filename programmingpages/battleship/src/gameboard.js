import { Ship } from "./shipMaker.js"

export class Gameboard { // one of these is made for each player!
  constructor(gridsize = 100) { // default dimensions are 10x10
    if (gridsize < 0) {
      return false
    }
    this.gridsize = gridsize;
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
    if (!this.shipDict[type]) {
      console.log(`Yip. Activated. ${this.shipDict[type]}`)
      return false
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
