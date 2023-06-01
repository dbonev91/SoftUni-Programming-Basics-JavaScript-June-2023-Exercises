function cinema (inputArray) {
  const typeInput = inputArray[0];
  const rowsCountInput = Number(inputArray[1]);
  const colsCountInput = Number(inputArray[2]);
   
  const premiereTypeName = 'Premiere';
  const normalTypeName = 'Normal';
  const discountTypeName = 'Discount';
   
  const premiereTicketCost = 12;
  const normalTicketCost = 7.5;
  const discountTicketCost = 5;
   
  let profit = 0;
   
  const allSeatsCount = rowsCountInput * colsCountInput;
 
  if (typeInput === premiereTypeName) {
    profit = allSeatsCount * premiereTicketCost;
  }
   
  if (typeInput === normalTypeName) {
    profit = allSeatsCount * normalTicketCost;
  }
   
  if (typeInput === discountTypeName) {
    profit = allSeatsCount * discountTicketCost;
  }
   
  console.log(`${profit.toFixed(2)} leva`);
}