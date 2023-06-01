function add15Minutes (inputArray) {
  const hours = Number(inputArray[0]);
  const minutes = Number(inputArray[1]);

  const MORE_MINUTES = 15;
  const MINUTES_IN_HOUR = 60;

  const hoursAsMinutes = hours * MINUTES_IN_HOUR;

  const minutesPlusHoursAsMinutes = minutes + hoursAsMinutes;
  const fullTime = minutesPlusHoursAsMinutes + MORE_MINUTES;

  let calculatedHours = Math.floor(fullTime / MINUTES_IN_HOUR);
  let calculatedMinutes = fullTime % MINUTES_IN_HOUR;

  if (calculatedHours === 24) {
    calculatedHours = 0;
  }

  if (calculatedMinutes <= 9) {
    calculatedMinutes = `0${calculatedMinutes}`
  }

  console.log(`${calculatedHours}:${calculatedMinutes}`);
}
