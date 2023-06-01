function udsToBgn (inputArray) {
  const usd = Number(inputArray[0]);
  const BGN_COURSE = 1.79549;
  const bgn = usd * BGN_COURSE;
  
  console.log(bgn);
}