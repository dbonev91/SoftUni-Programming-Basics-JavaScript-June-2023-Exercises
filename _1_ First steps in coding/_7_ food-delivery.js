function calculateFoodPrice (inputArray) {
  const chickenMenu = 10.35;
  const fishMenu = 12.40;
  const veganMenu = 8.15;
   
  const dessertPercent = 0.2;
   
  const deliveryPrice = 2.5;
   
  const chickenMenus = Number(inputArray[0]);
  const fishMenus = Number(inputArray[1]);
  const veganMenus = Number(inputArray[2]);
   
  const chickenMenusSum = chickenMenu * chickenMenus;
  const fishMenusSum = fishMenu * fishMenus;
  const veganMenusSum = veganMenu * veganMenus;
   
  const allFoodSum = chickenMenusSum + fishMenusSum + veganMenusSum;
   
  const dessertSum = allFoodSum * dessertPercent;
   
  const allServiceSum = allFoodSum + dessertSum + deliveryPrice;
   
  console.log(allServiceSum);
}