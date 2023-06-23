function specialNumbers (inputArray) {
  let numberInput = Number(inputArray[0]);
  let output = '';

  for (let fourCharNumber = 1111; fourCharNumber <= 9999; fourCharNumber += 1) {
    let fourCharNumberAsString = `${fourCharNumber}`;

    for (let numberCharIndex = 0; numberCharIndex < fourCharNumberAsString.length; numberCharIndex += 1) {
      let singleCharNumber = Number(fourCharNumberAsString[numberCharIndex]);

      if (numberInput % singleCharNumber !== 0) {
        break;
      }

      if (numberCharIndex === fourCharNumberAsString.length - 1) {
        output += `${fourCharNumberAsString} `;
      }
    }
  }

  console.log(output);
}

specialNumbers(["3"]);

