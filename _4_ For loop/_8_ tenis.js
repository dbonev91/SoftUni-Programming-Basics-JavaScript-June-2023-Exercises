function tenis (inputArray) {
  let tournamentsCountInput = Number(inputArray[0]);
  let initialPointsInput = Number(inputArray[1]);
  let allWinsCount = 0;
  let allPointsCount = 0;

  for (let i = 0; i < tournamentsCountInput; i += 1) {
    let result = inputArray[i + 2];

    if (result === "W") {
      allWinsCount += 1;
      allPointsCount += 2000;
    } else if (result === "F") {
      allPointsCount += 1200;
    } else {
      allPointsCount += 720;
    }
  }

  console.log(`Final points: ${initialPointsInput + allPointsCount}`);
  console.log(`Average points: ${Math.floor(allPointsCount / tournamentsCountInput)}`);
  console.log(`${(allWinsCount / tournamentsCountInput * 100).toFixed(2)}%`);
}

tenis(["5", "1400", "F", "SF", "W", "W", "SF"]);
