function cinemaTickets (inputArray) {
  let index = 0;
  let totalStandardTickets = 0;
  let totalStudentTickets = 0;
  let totalKidTickets = 0;

  while (inputArray[index] !== 'Finish') {
    let movieNameInput = inputArray[index];
    let roomAllSeatsInput = Number(inputArray[index + 1]);

    let takenSeats = 0;
    
    index += 2;

    while (inputArray[index] === 'standard' || inputArray[index] === 'student' || inputArray[index] === 'kid' || inputArray[index] === 'End') {
      if (takenSeats < roomAllSeatsInput) {
        switch (inputArray[index]) {
          case "standard":
            takenSeats += 1;
            totalStandardTickets += 1;
            break;
          case "student":
            takenSeats += 1;
            totalStudentTickets += 1;
            break;
          case "kid":
            takenSeats += 1;
            totalKidTickets += 1;
            break;
        }
      }

      index += 1;
    }

    console.log(`${movieNameInput} - ${(takenSeats / roomAllSeatsInput * 100).toFixed(2)}% full.`);
  }

  let totalTickets = totalStandardTickets + totalStudentTickets + totalKidTickets;

  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${(totalStudentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
  console.log(`${(totalStandardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
  console.log(`${(totalKidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
 cinemaTickets(["The Matrix",
 "20",
 "student",
 "standard",
 "kid",
 "kid",
 "student",
 "student",
 "standard",
 "student",
 "End",
 "The Green Mile",
 "17",
 "student",
 "standard",
 "standard",
 "student",
 "standard",
 "student",
 "End",
 "Amadeus",
 "3",
 "standard",
 "standard",
 "standard",
 "Finish"])
 
