export class Ship {
  constructor(length, positionX, positionY, ship_direction) {
    if (length < 1) {
      return;
    }
    this.length = length;
    this.positionX = positionX;
    this.positionY = positionY;
    this.hitsTaken = 0;
  
    let hitboxStart = [positionX, positionY];
    let hitboxEnd = [];
    if (ship_direction == 0) {
      hitboxEnd = [positionX + length - 1, positionY];
    } else {
      hitboxEnd = [positionX, positionY + length - 1];
    }

    this.hitbox = {start: hitboxStart, end: hitboxEnd};
  }

  hit() {
    this.hitsTaken++;
    return true;
  }

  sunk() {
    if (this.hitsTaken >= this.length) {
      return true
    }
    return false
  }
}

// export const Ship = (length = 1, position_x = 0, position_y = 0, ship_direction = 0) => {
  // direction refers to horizontal or vertical, counting positively from top left [0,0]
  // 1 = vertical, 0 = horizontal
  // if 1, length is counted DOWN to the limit of LENGTH
  // if 0, length is counted RIGHT to the limit of LENGTH
//   if (length == 0) {
//     return "That's not a valid length!"
//   }
  
//   let hitsTaken = 0;
//   let hitboxStart = [position_x, position_y];
//   let hitboxEnd = [];
//   if (ship_direction == 0) {  // ship is horizontal
//     hitboxEnd = [position_x + length-1, position_y]; // hitbox is along x axis, minus 1 to index to 0
//   } else {
//     hitboxEnd = [position_x, position_y + length-1]; // hitbox is along y axis, minus 1 to index to 0
//   }
//   let hitbox = {start: hitboxStart, end: hitboxEnd};

//   return {

//     hitsTaken,

//     hit() {
//       this.hitsTaken = this.hitsTaken + 1;
//       return this.hitsTaken
//     },

//     sunk() {
//       if (this.hitsTaken >= length) {
//         return true
//       } else {
//         return false
//       }
//     },

//     length,

//     hitbox,


//   }
// }