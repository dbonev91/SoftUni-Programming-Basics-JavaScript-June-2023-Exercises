function jessyTrip (inputArray) {
  let neededMoney = Number(inputArray[0]);
  let availableMoney = Number(inputArray[1]);
  let index = 2;
  let sequanceSpendDays = 0;

  while (availableMoney < neededMoney) {
    if (sequanceSpendDays >= 5) {
      break;
    }

    let currentTransactionType = inputArray[index];
    let currentSum = Number(inputArray[index + 1]);

    if (currentTransactionType === 'spend') {
      sequanceSpendDays += 1;
      availableMoney -= currentSum;
    }

    if (currentTransactionType === 'save') {
      sequanceSpendDays = 0;
      availableMoney += currentSum;
    }

    if (availableMoney < 0) {
      availableMoney = 0;
    }

    index += 2;
  }

  if (sequanceSpendDays >= 5) {
    console.log(`You can't save the money.`);
    console.log((index - 2) / 2);
  }
  
  if (availableMoney >= neededMoney) {
    console.log(`You saved the money for ${(index - 2) / 2} days.`);
  }
}

jessyTrip(["2000", "1000", "spend", "1200", "save", "2000"]);