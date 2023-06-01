function calculateBonus (inputArray) {
  const inputNumber = Number(inputArray[0]);
   
  let bonusAmount = 0;
   
  if (inputNumber <= 100) {
    bonusAmount += 5;
  } else if (inputNumber <= 1000) {
    bonusAmount += inputNumber * 0.2;
  } else {
    bonusAmount += inputNumber * 0.1;
  }
   
  if (inputNumber % 2 === 0) {
    bonusAmount += 1;
  } else if (inputNumber % 10 === 5) {
    bonusAmount += 2;
  }

  console.log(bonusAmount);
  console.log(inputNumber + bonusAmount);
}