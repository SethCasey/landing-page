export const Ship = (length, posx = 0, posy = 0, direction = 0) => {
  // Direction of 0 = horizontal (extends along x axis, to the right (increasing numbers))
  // Direction of 1 = vertical (extends along the y axis, down (increasing numbers))
  
  let sunk = false;
  let hitsTaken = 0;
  

  const hit = () => {
    hitsTaken = hitsTaken + 1;
    isSunk(hitsTaken);
    return hitsTaken
  }

  const isSunk = (hitsTaken) => {
    if (hitsTaken >= length) {
      sunk = true;
    }
    return sunk
  }

  const present = ([x,y]) => {
    return true;
  }

  return { posx, posy, direction, length, hitsTaken, sunk, hit, isSunk, present }
}