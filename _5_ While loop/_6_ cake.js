function cake (inputArray) {
  let width = Number(inputArray[0]);
  let height = Number(inputArray[1]);
  let size = width * height;

  let index = 2;

  while (size >= 0) {
    let currentPiece = inputArray[index];
    if (currentPiece === 'STOP') {
      break;
    }

    size -= Number(currentPiece);

    index += 1;
  }

  if (size >= 0) {
    console.log(`${size} pieces are left.`);
  } else {
    console.log(`No more cake left! You need ${Math.abs(size)} pieces more.`);
  }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
