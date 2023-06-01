function vacantionBookingList (inputArray) {
  const pagesCount = Number(inputArray[0]);
  const pagesPerHour = Number(inputArray[1]);
  const daysCount = Number(inputArray[2]);
   
  const hoursPerDay = pagesCount / pagesPerHour / daysCount;
   
  console.log(hoursPerDay);
}