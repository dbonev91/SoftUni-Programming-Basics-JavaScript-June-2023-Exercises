function sumPrimeAndNot (inputArray) {
  let index = 0;
  let primeNumbersSum = 0;
  let noPrimeNumbersSum = 0;

  while (inputArray[index] !== 'stop') {
    let currentNumber = Number(inputArray[index]);

    index += 1;

    if (currentNumber < 0) {
      console.log('Number is negative.');
    } else if (currentNumber === 0 || currentNumber === 1) {
      noPrimeNumbersSum += currentNumber;
    } else {
      let notPrimeNumber;

      for (let primeIndex = 2; primeIndex < currentNumber; primeIndex += 1) {
        if (currentNumber % primeIndex === 0) {
          notPrimeNumber = currentNumber;
        }
      }

      if (notPrimeNumber) {
        noPrimeNumbersSum += notPrimeNumber;
      } else {
        primeNumbersSum += currentNumber;
      }
    }
  }

  console.log(`Sum of all prime numbers is: ${primeNumbersSum}`);
  console.log(`Sum of all non prime numbers is: ${noPrimeNumbersSum}`);
}

sumPrimeAndNot(["3", "9", "0", "7", "19", "4", "stop"]);
