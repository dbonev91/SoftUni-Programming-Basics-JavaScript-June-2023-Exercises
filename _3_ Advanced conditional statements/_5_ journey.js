function journey(inputStringArray) {
  const SMALL_BUDGET = 100;
  const MEDIUM_BUDGET = 1000;
   
  const SUMMER_SEASON_TYPE = "summer";
  const WINTER_SEASON_TYPE = "winter";
   
  const SMALL_BUDGET_SUMMER_PERCENT = 0.3;
  const SMALL_BUDGET_WINTER_PERCENT = 0.7;
   
  const MEDIUM_BUDGET_SUMMER_PERCENT = 0.4;
  const MEDIUM_BUDGET_WINTER_PERCENT = 0.8;
   
  const LARGE_BUDGET_PERCENT = 0.9;
   
  const LEISURE_DESTINATION_CAMP = "Camp";
  const LEISURE_DESTINATION_HOTEL = "Hotel";
   
  const COUNTRY_DESTINATION_SMALL_BUDGET = "Bulgaria";
  const COUNTRY_DESTINATION_MEDIUM_BUDGET = "Balkans";
  const COUNTRY_DESTINATION_LARGE_BUDGET = "Europe";

  const inputBudget = Number(inputStringArray[0]);
  const inputSeason = inputStringArray[1];
   
  let countryDestination;
  let leisureDestination;
  let budgetPercent;

  if (inputBudget <= SMALL_BUDGET) {
    countryDestination = COUNTRY_DESTINATION_SMALL_BUDGET;
     
    if (inputSeason === SUMMER_SEASON_TYPE) {
      leisureDestination = LEISURE_DESTINATION_CAMP;
      budgetPercent = SMALL_BUDGET_SUMMER_PERCENT;
    }
     
    if (inputSeason === WINTER_SEASON_TYPE) {
      leisureDestination = LEISURE_DESTINATION_HOTEL;
      budgetPercent = SMALL_BUDGET_WINTER_PERCENT;
    }
  }
   
  if (inputBudget > MEDIUM_BUDGET) {
    countryDestination = COUNTRY_DESTINATION_LARGE_BUDGET;
    budgetPercent = LARGE_BUDGET_PERCENT;
    leisureDestination = LEISURE_DESTINATION_HOTEL;
  }
   
  if (inputBudget > SMALL_BUDGET && inputBudget <= MEDIUM_BUDGET) {
    countryDestination = COUNTRY_DESTINATION_MEDIUM_BUDGET;
     
    if (inputSeason === SUMMER_SEASON_TYPE) {
      leisureDestination = LEISURE_DESTINATION_CAMP;
      budgetPercent = MEDIUM_BUDGET_SUMMER_PERCENT;
    }
     
    if (inputSeason === WINTER_SEASON_TYPE) {
      budgetPercent = MEDIUM_BUDGET_WINTER_PERCENT;
      leisureDestination = LEISURE_DESTINATION_HOTEL;
    }
  }

  const neededBudget = inputBudget * budgetPercent;
   
  console.log(`Somewhere in ${countryDestination}`);
  console.log(`${leisureDestination} - ${neededBudget.toFixed(2)}`);
}
