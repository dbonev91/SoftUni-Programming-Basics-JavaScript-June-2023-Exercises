function calculate (inputArray) {
  const plasticUnit = 1.5;
  const colorUnit = 14.5;
  const colorSplitterUnit = 5;

  const additionalPlastic = 2;
  const additionalColorPercent = 10;

  const neededPlastic = Number(inputArray[0]);
  const neededColor = Number(inputArray[1]);
  const splitterQuantity = Number(inputArray[2]);
  const workHours = Number(inputArray[3]);

  const bagsSum = 0.4;
  const plasticSum = (neededPlastic + additionalPlastic) * plasticUnit;
  const colorAdditionalPercent = (neededColor / 100) * additionalColorPercent;
  const colorSum = (neededColor + colorAdditionalPercent) * colorUnit;
  const splitterSum = splitterQuantity * colorSplitterUnit;

  const allMaterialSum = plasticSum + colorSum + splitterSum + bagsSum;

  const workerPercent = 30;
  const workerSum = (allMaterialSum / 100) * workerPercent;
  const workerFullSum = workerSum * workHours;
  const allExpensesSum = allMaterialSum + workerFullSum;

  console.log(allExpensesSum);
 }