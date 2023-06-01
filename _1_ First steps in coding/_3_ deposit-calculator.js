function deposit (inputArray) {
  const depositAmount = Number(inputArray[0]);
  const depositSchedule = Number(inputArray[1]);
  const interestPercent = Number(inputArray[2]) / 100;
  const YEAR_MONTHS = 12;
   
  const depositPeriodSum = depositAmount + depositSchedule * ((depositAmount * interestPercent) / YEAR_MONTHS);
   
  console.log(depositPeriodSum);
}