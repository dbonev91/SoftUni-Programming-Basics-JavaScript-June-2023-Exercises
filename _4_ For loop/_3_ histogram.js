function histogram (inputArray) {
  let p1Count = 0;
  let p2Count = 0;
  let p3Count = 0;
  let p4Count = 0;
  let p5Count = 0;

  let numbersCount = inputArray[0];

  for (let i = 1; i <= numbersCount; i += 1) {
    let currentNumber = Number(inputArray[i]);

    if (currentNumber < 200) {
      p1Count += 1;
    } else if (currentNumber >= 200 && currentNumber <= 399) {
      p2Count += 1;
    } else if (currentNumber >= 400 && currentNumber <= 599) {
      p3Count += 1;
    } else if (currentNumber >= 600 && currentNumber <= 799) {
      p4Count += 1;
    } else {
      p5Count += 1;
    }
  }

  console.log(`${(p1Count / numbersCount * 100).toFixed(2)}%`);
  console.log(`${(p2Count / numbersCount * 100).toFixed(2)}%`);
  console.log(`${(p3Count / numbersCount * 100).toFixed(2)}%`);
  console.log(`${(p4Count / numbersCount * 100).toFixed(2)}%`);
  console.log(`${(p5Count / numbersCount * 100).toFixed(2)}%`);
}