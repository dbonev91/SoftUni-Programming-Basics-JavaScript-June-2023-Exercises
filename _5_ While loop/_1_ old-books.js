function oldBooksReturnSolution (inputArray) {
  let favouriteBook = inputArray[0];
  let index = 0;

  while (inputArray[index + 1] !== "No More Books") {
    if (inputArray[index + 1] === favouriteBook) {
      console.log(`You checked ${index} books and found it.`);
      return;
    }

    index += 1;
  }

  console.log('The book you search is not here!');
  console.log(`You checked ${index} books.`);
}

oldBooksReturnSolution(["Troy", "Stronger", "Life Style", "Troy"]);

function oldBooksBreakSolution (inputArray) {
  let favouriteBook = inputArray[0];
  let index = 0;
  let isBookFounded = false;

  while (inputArray[index + 1] !== "No More Books") {
    if (inputArray[index + 1] === favouriteBook) {
      isBookFounded = true;
      break;
    }

    index += 1;
  }

  if (isBookFounded) {
    console.log(`You checked ${index} books and found it.`);
  } else {
    console.log('The book you search is not here!');
    console.log(`You checked ${index} books.`);
  }
}

oldBooksBreakSolution(["Troy", "Stronger", "Life Style", "Troy"]);
