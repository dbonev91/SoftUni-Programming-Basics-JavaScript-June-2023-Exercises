function specialNumbers (inputArray) {
  let numberInput = Number(inputArray[0]);
  let output = '';

  for (let fourCharNumber = 1111; fourCharNumber <= 9999; fourCharNumber += 1) {
    let fourCharNumberAsString = `${fourCharNumber} `;

    for (let numberCharIndex = 0; numberCharIndex < 4; numberCharIndex += 1) {
      let singleCharNumber = Number(fourCharNumberAsString[numberCharIndex]);

      if (numberInput % singleCharNumber !== 0) {
        fourCharNumberAsString = '';
        break;
      }
    }

    output += fourCharNumberAsString;
  }

  console.log(output);
}

specialNumbers(["3"]);

