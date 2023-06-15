function evenOddSum (inputArray) {
  let lowerNumber = Number(inputArray[0]);
  let biggerNumber = Number(inputArray[1]);

  let output = '';

  for (let i = lowerNumber; i <= biggerNumber; i += 1) {
    let currentNumberAsAString = `${i}`;
    let evenSum = 0;
    let oddSum = 0;

    for (j = 0; j < currentNumberAsAString.length; j += 1) {
      if (j % 2 === 0) {
        evenSum += Number(currentNumberAsAString[j]);
      } else {
        oddSum += Number(currentNumberAsAString[j]);
      }
    }

    if (evenSum === oddSum) {
      output += `${currentNumberAsAString} `;
    }
  }

  if (output !== '') {
    console.log(output);
  }
}

evenOddSum(["100000", "100050"]);
