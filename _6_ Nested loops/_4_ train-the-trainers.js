function trainTheTrainers (inputArray) {
  let juryCount = Number(inputArray[0]);
  let allCoursesEstimateSum = 0;
  let index = 1;
  let estimatesCount = 0;

  while (inputArray[index] !== 'Finish') {
    let currentCourseName;
    let currentCourseEstimateSum = 0;

    for (let estimateIndex = 0; estimateIndex <= juryCount; estimateIndex += 1) {
      if (estimateIndex === 0) {
        currentCourseName = inputArray[index];
      } else {
        estimatesCount += 1;
        currentCourseEstimateSum += Number(inputArray[index]);
      }

      index += 1;
    }

    allCoursesEstimateSum += currentCourseEstimateSum;

    console.log(`${currentCourseName} - ${(currentCourseEstimateSum / juryCount).toFixed(2)}.`);
  }

  console.log(`Student's final assessment is ${(allCoursesEstimateSum / estimatesCount).toFixed(2)}.`);
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
