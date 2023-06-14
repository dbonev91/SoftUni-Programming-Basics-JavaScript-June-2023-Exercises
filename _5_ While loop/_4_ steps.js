function steps (inputArray) {
  let score = 0;
  let index = 0;
  let goal = 10000;

  while (score < goal) {
    if (inputArray[index] === "Going home") {
      score += Number(inputArray[index + 1]);
      break;
    }

    score += Number(inputArray[index]);
    index += 1;
  }

  if (score >= goal) {
    console.log("Goal reached! Good job!");
    console.log(`${score - goal} steps over the goal!`);
  } else {
    console.log(`${goal - score} more steps to reach goal.`);
  }
}

steps(["1000", "1500", "2000", "6500"]);
