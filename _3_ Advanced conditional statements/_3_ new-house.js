function flowerGarden (inputStringArray) {
  const ROSE_PRICE = 5;
  const DALIA_PRICE = 3.8;
  const LALE_PRICE = 2.8;
  const NARCIS_PRICE = 3;
  const GLADIOLA_PRICE = 2.5;
   
  const ROSE_COUNT_DISCOUNT = 80;
  const DALIA_COUNT_DISCOUNT = 90;
  const LALE_COUNT_DISCOUNT = 80;
   
  const NARCIS_COUNT_HIGH = 120;
  const GLADIOLA_COUNT_HIGH = 80;
   
  const ROSE_PERCENT_DISCOUNT = 0.1;
  const DALIA_PERCENT_DISCOUNT = 0.15;
  const LALE_PERCENT_DISCOUNT = 0.1;
  const NARCIS_PERCENT_DISCOUNT = 0.15;
  const GLADIOLA_PERCENT_DISCOUNT = 0.2;
   
  const ROSE_TYPE = "Roses";
  const DAHLIA_TYPE = "Dahlias";
  const TULIP_TYPE = "Tulips";
  const NARCIS_TYPE = "Narcissus";
  const GLADIOLA_TYPE = "Gladiolus";
   
  const inputFlowerType = inputStringArray[0];
  const inputFlowerCount = Number(inputStringArray[1]);
  const inputBudget = Number(inputStringArray[2]);
   
  if (inputFlowerType === ROSE_TYPE) {
    let rosesPrice = ROSE_PRICE * inputFlowerCount;
     
    if (inputFlowerCount > ROSE_COUNT_DISCOUNT) {
      rosesPrice -= rosesPrice * ROSE_PERCENT_DISCOUNT;
    }
     
    if (inputBudget >= rosesPrice) {
      console.log(`Hey, you have a great garden with ${inputFlowerCount} ${inputFlowerType} and ${(inputBudget - rosesPrice).toFixed(2)} leva left.`);
    }
     
    if (inputBudget < rosesPrice) {
      console.log(`Not enough money, you need ${(rosesPrice - inputBudget).toFixed(2)} leva more.`);
    }
  }
   
  if (inputFlowerType === DAHLIA_TYPE) {
    let dhaliasPrice = DALIA_PRICE * inputFlowerCount;
     
    if (inputFlowerCount > DALIA_COUNT_DISCOUNT) {
      dhaliasPrice -= dhaliasPrice * DALIA_PERCENT_DISCOUNT;
    }
     
    if (inputBudget >= dhaliasPrice) {
      console.log(`Hey, you have a great garden with ${inputFlowerCount} ${inputFlowerType} and ${(inputBudget - dhaliasPrice).toFixed(2)} leva left.`);
    }
     
    if (inputBudget < dhaliasPrice) {
      console.log(`Not enough money, you need ${(dhaliasPrice - inputBudget).toFixed(2)} leva more.`);
    }
  }
   
  if (inputFlowerType === TULIP_TYPE) {
    let tulipsPrice = LALE_PRICE * inputFlowerCount;
     
    if (inputFlowerCount > LALE_COUNT_DISCOUNT) {
      tulipsPrice -= tulipsPrice * LALE_PERCENT_DISCOUNT;
    }
     
    if (inputBudget >= tulipsPrice) {
      console.log(`Hey, you have a great garden with ${inputFlowerCount} ${inputFlowerType} and ${(inputBudget - tulipsPrice).toFixed(2)} leva left.`);
    }
     
    if (inputBudget < tulipsPrice) {
      console.log(`Not enough money, you need ${(tulipsPrice - inputBudget).toFixed(2)} leva more.`);
    }
  }
   
  if (inputFlowerType === NARCIS_TYPE) {
    let narcisesPrice = NARCIS_PRICE * inputFlowerCount;
     
    if (inputFlowerCount < NARCIS_COUNT_HIGH) {
      narrisesPrice += narcisesPrice * NARCIS_PERCENT_DISCOUNT;
    }
     
    if (inputBudget >= narcisesPrice) {
      console.log(`Hey, you have a great garden with ${inputFlowerCount} ${inputFlowerType} and ${(inputBudget - narcisesPrice).toFixed(2)} leva left.`);
    }
     
    if (inputBudget < narcisesPrice) {
      console.log(`Not enough money, you need ${(narcisesPrice - inputBudget).toFixed(2)} leva more.`);
    }
  }
   
  if (inputFlowerType === GLADIOLA_TYPE) {
    let gladiolasPrice = GLADIOLA_PRICE * inputFlowerCount;
     
    if (inputFlowerCount < GLADIOLA_COUNT_HIGH) {
      gladiolasPrice += gladiolasPrice * GLADIOLA_PERCENT_DISCOUNT;
    }
     
    if (inputBudget >= gladiolasPrice) {
      console.log(`Hey, you have a great garden with ${inputFlowerCount} ${inputFlowerType} and ${(inputBudget - gladiolasPrice).toFixed(2)} leva left.`);
    }
     
    if (inputBudget < gladiolasPrice) {
      console.log(`Not enough money, you need ${(gladiolasPrice - inputBudget).toFixed(2)} leva more.`);
    }
  }
}