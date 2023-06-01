function fishTank (inputArray) {
  const length = Number(inputArray[0]);
  const width = Number(inputArray[1]);
  const height = Number(inputArray[2]);
  const percent = Number(inputArray[3]);
   
  const tankVolume = length * width * height;
  const litresVolume = tankVolume * 0.001;
  const neededLitres = litresVolume * (1 - (percent / 100));

  console.log(neededLitres);
}