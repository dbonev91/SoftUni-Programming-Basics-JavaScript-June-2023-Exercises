function oscars (inputArray) {
  let actorNameInput = inputArray[0];
  let academyPointsInput = Number(inputArray[1]);
  let audienceCountInput = Number(inputArray[2]);

  for (let i = 0; i < audienceCountInput * 2; i += 2) {
    let additionalPoints = Number(inputArray[i + 4]);
    let name = inputArray[i + 3];
    
    academyPointsInput += (additionalPoints * name.length) / 2;

    if (academyPointsInput > 1250.5) {
      console.log(`Congratulations, ${actorNameInput} got a nominee for leading role with ${academyPointsInput.toFixed(1)}!`);
      return;
    }
  }

  console.log(`Sorry, ${actorNameInput} you need ${(1250.5 - academyPointsInput).toFixed(1)} more!`);
}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);