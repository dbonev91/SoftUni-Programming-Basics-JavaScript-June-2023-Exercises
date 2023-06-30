function grades (inputArray) {
  let badGradesAllowed = inputArray[0];
  let index = 1;
  let currentTaskName;
  let allGradesSum = 0;
  let allGradesCount = 0;
  let badGradesCount = 0;

  while (inputArray[index] !== "Enough") {
    let currentScore = Number(inputArray[index + 1]);

    allGradesSum += currentScore;
    allGradesCount += 1;

    if (currentScore <= 4) {
      badGradesCount += 1;
    }

    if (badGradesCount >= badGradesAllowed) {
      break;
    }

    currentTaskName = inputArray[index];
    index += 2;
  }

  if (badGradesCount >= badGradesAllowed) {
    console.log(`You need a break, ${badGradesCount} poor grades.`);
  } else {
    console.log(`Average score: ${(allGradesSum / allGradesCount).toFixed(2)}`);
    console.log(`Number of problems: ${allGradesCount}`);
    console.log(`Last problem: ${currentTaskName}`);
  }
}

grades(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);