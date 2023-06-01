function lunchBreak (inputArray) {
  const serialNameInput = inputArray[0];
  const episodeLength = Number(inputArray[1]);
  const restLength = Number(inputArray[2]);
   
  const LUNCH_TIME_PART = 8;
  const REST_TIME_PART = 4;
   
  const lunchTimeWithinRest = restLength / LUNCH_TIME_PART;
  const restTimeWithinRest = restLength / REST_TIME_PART;
   
  const restTimeToWatch = restLength - lunchTimeWithinRest - restTimeWithinRest;
   
  if (restTimeToWatch >= episodeLength) {
    console.log(`You have enough time to watch ${serialNameInput} and left with ${Math.ceil(restTimeToWatch - episodeLength)} minutes free time.`);
  } else {
    console.log(`You don't have enough time to watch ${serialNameInput}, you need ${Math.ceil(episodeLength - restTimeToWatch)} more minutes.`);
  }
}