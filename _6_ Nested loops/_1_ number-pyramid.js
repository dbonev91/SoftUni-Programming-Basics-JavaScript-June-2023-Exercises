function numberPyramid (inputArray) {
  let n = Number(inputArray[0]);
  let currentNumber = 0;

  for (let row = 0; row <= n; row += 1) {
    let drawALine = '';
    for (let col = 1; col <= row + 1; col += 1) {
      currentNumber += 1;

      drawALine += `${currentNumber} `
      if (currentNumber >= n) {
        break;
      }
    }
    
    console.log(drawALine);

    if (currentNumber >= n) {
      break;
    }
  }
}

numberPyramid(["7"]);