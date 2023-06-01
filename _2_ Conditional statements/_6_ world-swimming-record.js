function swimmingRecord (inputArray) {
  const SWIM_OPPOSITE_METRES = 15;
  const SWIM_OPPOSITE_SECONDS = 12.5;
   
  const theCurrentRecordInSeconds = Number(inputArray[0]);
  const distanceInMetres = Number(inputArray[1]);
  const timeInSeconds = Number(inputArray[2]);
   
  const timeToSwim = distanceInMetres * timeInSeconds;
 
  const oppositeTime = Math.floor(distanceInMetres / SWIM_OPPOSITE_METRES) * SWIM_OPPOSITE_SECONDS;

  const allTimeToSwim = timeToSwim + oppositeTime;
  
  if (allTimeToSwim >= theCurrentRecordInSeconds) {
    console.log(`No, he failed! He was ${(allTimeToSwim - theCurrentRecordInSeconds).toFixed(2)} seconds slower.`);
  } else {
    console.log(`Yes, he succeeded! The new world record is ${allTimeToSwim.toFixed(2)} seconds.`);
  }
}