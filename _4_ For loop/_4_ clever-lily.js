function cleverLily (inputArray) {
  let age = Number(inputArray[0]);
  let dishwasherPrice = Number(inputArray[1]);
  let toyPrice = Number(inputArray[2]);
  let allMoney = 0;

  for (let i = 1; i <= age; i += 1) {
    let isEven = i % 2 === 0;

    if (isEven) {
      allMoney += 10 * (i / 2) - 1;
    } else {
      allMoney += toyPrice;
    }
  }

  if (allMoney >= dishwasherPrice) {
    console.log(`Yes! ${(allMoney - dishwasherPrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(dishwasherPrice - allMoney).toFixed(2)}`);
  }
}
