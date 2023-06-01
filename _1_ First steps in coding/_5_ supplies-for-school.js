function schoolSupplies (inputArray) {
  const penPrice = 5.8;
  const markPrice = 7.2;
  const chemist = 1.2;
   
  const penCount = Number(inputArray[0]);
  const markCount = Number(inputArray[1]);
  const chemistCount = Number(inputArray[2]);
  const percentDiscount = Number(inputArray[3]) / 100;

  const fullPrice = (penCount * penPrice) + (markCount * markPrice) + (chemist * chemistCount);
  const priceDiscount = fullPrice * percentDiscount;
  const discountedPrice = fullPrice - priceDiscount;
   
  console.log(discountedPrice);
 }