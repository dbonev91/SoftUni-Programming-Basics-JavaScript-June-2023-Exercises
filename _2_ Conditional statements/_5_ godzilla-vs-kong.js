function calculateMovieProfit (inputArray) {
  const statistCountBonus = 150;
  const statistPercentBonus = 0.1;
  const decorPercent = 0.1;

  const movieBudget = Number(inputArray[0]);
  const statistsCount = Number(inputArray[1]);
  const singleClotesStatistPrice = Number(inputArray[2]);

  let statistClothesSum = statistsCount * singleClotesStatistPrice;

  if (statistsCount > statistCountBonus) {
    statistClothesSum -= statistClothesSum * statistPercentBonus;
  }

  const decorSum = movieBudget * decorPercent;
  const allExpenses = statistClothesSum + decorSum;

  if (movieBudget >= allExpenses) {
    console.log('Action!');
    console.log(`Wingard starts filming with ${(movieBudget - allExpenses).toFixed(2)} leva left.`);
  } else {
    console.log('Not enough money!');
    console.log(`Wingard needs ${(allExpenses - movieBudget).toFixed(2)} leva more.`);
  }
}