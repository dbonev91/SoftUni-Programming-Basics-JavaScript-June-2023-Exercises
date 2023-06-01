function calculateBasketballStuff (inputArray) {
  const oneYearTax = Number(inputArray[0]);
   
  const shoesPrice = oneYearTax - (oneYearTax * 0.4);
  const clothes = shoesPrice - (shoesPrice * 0.2);
  const boll = clothes / 4;
  const others = boll / 5;
   
  const allExpenses = Number(oneYearTax) + Number(shoesPrice) + Number(clothes) + Number(boll) + Number(others);
   
  console.log(allExpenses);
}