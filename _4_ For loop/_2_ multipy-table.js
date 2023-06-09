function multiplyTable (inputArray) {
  const inputNumber = Number(inputArray[0]);

  for (let i = 1; i <= 10; i += 1) {
    console.log(`${i} * ${inputNumber} = ${i * inputNumber}`);
  }
}