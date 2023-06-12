function salary (inputArray) {
  let openTabsCountInput = Number(inputArray[0]);
  let salaryInput = Number(inputArray[1]);

  for (let i = 0; i < openTabsCountInput; i += 1) {
    let currentSiteName = inputArray[i + 2];

    if (currentSiteName === "Facebook") {
      salaryInput -= 150;
    }

    if (currentSiteName === "Instagram") {
      salaryInput -= 100;
    }

    if (currentSiteName === "Reddit") {
      salaryInput -= 50;
    }
  }

  if (salaryInput <= 0) {
    console.log(`You have lost your salary.`);
  } else {
    console.log(salaryInput);
  }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
