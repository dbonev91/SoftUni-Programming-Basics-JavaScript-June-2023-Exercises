function moving (inputArray) {
  let x = Number(inputArray[0]);
  let y = Number(inputArray[1]);
  let z = Number(inputArray[2]);

  let capacity = x * y * z;
  let calculatedCapacity = 0;
  let index = 3;

  while (calculatedCapacity <= capacity) {
    let currentMeasure = inputArray[index];

    if (currentMeasure === 'Done') {
      break;
    }

    calculatedCapacity += Number(currentMeasure);
    index += 1;
  }

  if (calculatedCapacity <= capacity) {
    console.log(`${capacity - calculatedCapacity} Cubic meters left.`);
  } else {
    console.log(`No more free space! You need ${calculatedCapacity - capacity} Cubic meters more.`);
  }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
