function shopping (inputArray) {
  const budgetInput = Number(inputArray[0]);
  const videoCardCountInput = Number(inputArray[1]);
  const processorCountInput = Number(inputArray[2]);
  const ramCountInput = Number(inputArray[3]);
   
  const DISCOUNT_PERCENT = 0.15;
  const SINGLE_VIDEO_CARD_PRICE = 250;
  const PROCESSOR_PERCENT_PRICE = 0.35;
  const RAM_PERCENT_PRICE = 0.1;
   
  const allVideoCardsSum = videoCardCountInput * SINGLE_VIDEO_CARD_PRICE;
  const processorsSum = (allVideoCardsSum * PROCESSOR_PERCENT_PRICE) * processorCountInput;
  const ramSum = (allVideoCardsSum * RAM_PERCENT_PRICE) * ramCountInput;
   
  let allProductsSum = allVideoCardsSum + processorsSum + ramSum;
   
  if (videoCardCountInput > processorCountInput) {
    allProductsSum -= allProductsSum * DISCOUNT_PERCENT;
  }
   
  if (budgetInput >= allProductsSum) {
    console.log(`You have ${(budgetInput - allProductsSum).toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${(allProductsSum - budgetInput).toFixed(2)} leva more!`);
  }
}