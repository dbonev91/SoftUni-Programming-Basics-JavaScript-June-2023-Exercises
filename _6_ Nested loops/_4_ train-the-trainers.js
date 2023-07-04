function trainTheTrainers (inputArray) {
  let juryCount = Number(inputArray[0]);
  let allCoursesEstimateSum = 0;
  let index = 1;
  let estimatesCount = 0;

  while (inputArray[index] !== 'Finish') {
    let currentCourseName;
    let currentCourseEstimateSum = 0;

    for (let estimateIndex = index; estimateIndex < index + juryCount + 1; estimateIndex += 1) {
      if (estimateIndex === index) {
        currentCourseName = inputArray[estimateIndex];
      } else {
        estimatesCount += 1;
        currentCourseEstimateSum += Number(inputArray[estimateIndex]);
      }
    }

    allCoursesEstimateSum += currentCourseEstimateSum;

    console.log(`${currentCourseName} - ${(currentCourseEstimateSum / juryCount).toFixed(2)}.`);
    index += juryCount + 1;
  }

  console.log(`Student's final assessment is ${(allCoursesEstimateSum / estimatesCount).toFixed(2)}.`);
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
