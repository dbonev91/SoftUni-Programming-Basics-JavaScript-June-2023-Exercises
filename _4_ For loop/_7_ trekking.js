function trekking (inputArray) {
  let groupsCountInput = Number(inputArray[0]);
  let allPeopleCount = 0;

  let musalaPeople = 0;
  let monblanPeople = 0;
  let kilimandjaroPeople = 0;
  let kTwoPeople = 0;
  let everestPeople = 0;

  for (let i = 0; i < groupsCountInput; i += 1) {
    const currentGroupCount = Number(inputArray[i + 1]);
    allPeopleCount += currentGroupCount;

    if (currentGroupCount <= 5) {
      musalaPeople += currentGroupCount;
    } else if (currentGroupCount > 5 && currentGroupCount <= 12) {
      monblanPeople += currentGroupCount;
    } else if (currentGroupCount > 12 && currentGroupCount <= 25) {
      kilimandjaroPeople += currentGroupCount;
    } else if (currentGroupCount > 25 && currentGroupCount <= 40) {
      kTwoPeople += currentGroupCount;
    } else {
      everestPeople += currentGroupCount;
    }
  }

  console.log(`${(musalaPeople / allPeopleCount * 100).toFixed(2)}%`);
  console.log(`${(monblanPeople / allPeopleCount * 100).toFixed(2)}%`);
  console.log(`${(kilimandjaroPeople / allPeopleCount * 100).toFixed(2)}%`);
  console.log(`${(kTwoPeople / allPeopleCount * 100).toFixed(2)}%`);
  console.log(`${(everestPeople / allPeopleCount * 100).toFixed(2)}%`);
}

trekking(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
