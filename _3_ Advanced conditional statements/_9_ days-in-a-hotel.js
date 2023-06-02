function daysInAHotel (inputStringArray) {
  const days = Number(inputStringArray[0]);
  const roomType = inputStringArray[1];
  const feedback = inputStringArray[2];

  const nights = days - 1;

  let leisurePrice = 0;

  if (roomType === 'room for one person') {
    leisurePrice += 18 * nights;
  }

  if (roomType === 'apartment') {
    leisurePrice += 25 * nights;

    if (nights < 10) {
      leisurePrice -= leisurePrice * 0.30;
    }

    if (nights >= 10 && nights <= 15) {
      leisurePrice -= leisurePrice * 0.35;
    }

    if (nights > 15) {
      leisurePrice -= leisurePrice * 0.50;
    }
  }

  if (roomType === 'president apartment') {
    leisurePrice += 35 * nights;

    if (nights < 10) {
      leisurePrice -= leisurePrice * 0.10;
    }

    if (nights >= 10 && nights <= 15) {
      leisurePrice -= leisurePrice * 0.15;
    }

    if (nights > 15) {
      leisurePrice -= leisurePrice * 0.20;
    }
  }

  if (feedback === 'positive') {
    leisurePrice += leisurePrice * 0.25;
  }

  if (feedback === 'negative') {
    leisurePrice -= leisurePrice * 0.1;
  }

  console.log(leisurePrice.toFixed(2));
}