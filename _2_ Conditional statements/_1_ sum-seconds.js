function timeCalculator (inputArray) {
  const first = Number(inputArray[0]);
  const second = Number(inputArray[1]);
  const third = Number(inputArray[2]);
   
  const allTimeInSeconds = first + second + third;
 
  const SECONDS_IN_MINUTE = 60;

  const minutes = Math.floor(allTimeInSeconds / SECONDS_IN_MINUTE);
  const restSeconds = allTimeInSeconds % SECONDS_IN_MINUTE;
   
  if (restSeconds <= 9) {
    console.log(`${minutes}:0${restSeconds}`);
  } else {
    console.log(`${minutes}:${restSeconds}`);
  }
}