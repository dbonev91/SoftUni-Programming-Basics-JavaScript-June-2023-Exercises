function boat (inputStringArray) {
  const SPRING_RENT_BOAT = 3000;
  const SUMMER_AND_AUTUMN_RENT_BOAT = 4200;
  const WINTER_RENT_BOAT = 2600;
   
  const SMALL_GROUP = 6;
  const LARGE_GROUP = 12;
   
  const SMALL_GROUP_PERCENT_DISCOUNT = 0.1;
  const MEDIUM_GROUP_PERCENT_DISCOUNT = 0.15;
  const LARGE_GROUP_PERCENT_DISCOUNT = 0.25;
   
  const FISHER_EVEN_ADDITIONAL_DISCOUNT = 0.05;
   
  const SPRING_SEASON_TYPE = "Spring";
  const SUMMER_SEASON_TYPE = "Summer";
  const AUTUMN_SEASON_TYPE = "Autumn";
  const WINTER_SEASON_TYPE = "Winter";

  const budgetInput = Number(inputStringArray[0]);
  const seasonInput = inputStringArray[1];
  const peopleCount = Number(inputStringArray[2]);
   
  let boatRent;
   
  if (seasonInput === SUMMER_SEASON_TYPE || seasonInput === AUTUMN_SEASON_TYPE) {
    boatRent = SUMMER_AND_AUTUMN_RENT_BOAT;
  }
   
  if (seasonInput === SPRING_SEASON_TYPE) {
    boatRent = SPRING_RENT_BOAT;
  }
   
  if (seasonInput === WINTER_SEASON_TYPE) {
    boatRent = WINTER_RENT_BOAT;
  }
   
  let percentDiscount;
 
  if (peopleCount <= SMALL_GROUP) {
    percentDiscount = SMALL_GROUP_PERCENT_DISCOUNT;
  }
   
  if (peopleCount >= LARGE_GROUP) {
    percentDiscount = LARGE_GROUP_PERCENT_DISCOUNT;
  }
   
  if (peopleCount > SMALL_GROUP && peopleCount < LARGE_GROUP) {
    percentDiscount = MEDIUM_GROUP_PERCENT_DISCOUNT;
  }
   
  boatRent -= boatRent * percentDiscount;

  const isEvenPeopleCount = (peopleCount % 2) === 0;
  const noAutumn = seasonInput !== AUTUMN_SEASON_TYPE;
   
  if (isEvenPeopleCount && noAutumn) {
    boatRent -= boatRent * FISHER_EVEN_ADDITIONAL_DISCOUNT;
  }
   
  if (budgetInput >= boatRent) {
    console.log(`Yes! You have ${(budgetInput - boatRent).toFixed(2)} leva left.`)
  }
   
  if (budgetInput < boatRent) {
    console.log(`Not enough money! You need ${(boatRent - budgetInput).toFixed(2)} leva.`);
  }
}