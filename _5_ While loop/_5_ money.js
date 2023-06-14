function money (inputArray) {
  let moneyInputNumber = Math.floor(Number(inputArray[0]) * 100);
  let calculatedMoney = 0;
  let moneyCount = 0;

  while (calculatedMoney < moneyInputNumber) {
    if (calculatedMoney + 200 <= moneyInputNumber) {
      calculatedMoney += 200;
    } else if (calculatedMoney + 100 <= moneyInputNumber) {
      calculatedMoney += 100;
    } else if (calculatedMoney + 50 <= moneyInputNumber) {
      calculatedMoney += 50;
    } else if (calculatedMoney + 20 <= moneyInputNumber) {
      calculatedMoney += 20;
    } else if (calculatedMoney + 10 <= moneyInputNumber) {
      calculatedMoney += 10;
    } else if (calculatedMoney + 5 <= moneyInputNumber) {
      calculatedMoney += 5;
    } else if (calculatedMoney + 2 <= moneyInputNumber) {
      calculatedMoney += 2;
    } else if (calculatedMoney + 1 <= moneyInputNumber) {
      calculatedMoney += 1;
    }

    moneyCount += 1;
  }

  console.log(moneyCount);
}

money(["1.23"]);