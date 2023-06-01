function calculateShopProfit (inputArray) {
  const tripAmount = Number(inputArray[0]);
  const puzzlesCount = Number(inputArray[1]);
  const dollsCount = Number(inputArray[2]);
  const bearsCount = Number(inputArray[3]);
  const minionsCount = Number(inputArray[4]);
  const trucksCount = Number(inputArray[5]);
   
  const allProductsCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;
   
  const DISCOUNT_PRODUCTS_COUNT = 50;

  const PUZZLE_PRICE = 2.6;
  const DOLL_PRICE = 3;
  const BEAR_PRICE = 4.1;
  const MINION_PRICE = 8.2;
  const TRUCK_PRICE = 2;
   
  let fullPrice = puzzlesCount * PUZZLE_PRICE + dollsCount * DOLL_PRICE + bearsCount * BEAR_PRICE + minionsCount * MINION_PRICE + trucksCount * TRUCK_PRICE;
   
  if (allProductsCount >= DISCOUNT_PRODUCTS_COUNT) {
    const discount = fullPrice * 0.25;
    fullPrice -= discount;
  }
   
  const rent = fullPrice * 0.1;
  const profit = fullPrice - rent;
   
  if (profit >= tripAmount) {
    console.log(`Yes! ${(profit - tripAmount).toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${(tripAmount- profit).toFixed(2)} lv needed.`);
  }
}