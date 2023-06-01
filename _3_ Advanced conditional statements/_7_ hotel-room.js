function hotelRoom (inputStringArray) {
  const MONTH_MAY = "May";
  const MONTH_JUNE = 'June';
  const MONTH_JULY = 'July';
  const MONTH_AUGUST = 'August';
  const MONTH_SEPTEMBER = 'September';
  const MONTH_OCTOBER = 'October';

  const PRICE_STUDIO_MAY_OCTOBER = 50;
  const PRICE_STUDIO_JUNE_SEPTEMBER = 75.20;
  const PRICE_STUDIO_JULY_AUGUST = 76;

  const PRICE_APARTMENT_MAY_OCTOBER = 65;
  const PRICE_APARTMENT_JUNE_SEPTEMBER = 68.70;
  const PRICE_APARTMENT_JULY_AUGUST = 77;

  const inputMonth = inputStringArray[0];
  const inputNightsCount = Number(inputStringArray[1]);

  let studioAmount;
  let apartmentAmount;

  if (inputMonth === MONTH_MAY || inputMonth === MONTH_OCTOBER) {
    studioAmount = PRICE_STUDIO_MAY_OCTOBER * inputNightsCount;
    apartmentAmount = PRICE_APARTMENT_MAY_OCTOBER * inputNightsCount;

    if (inputNightsCount > 7 && inputNightsCount <= 14) {
      studioAmount -= studioAmount * 0.05;
    }

    if (inputNightsCount > 14) {
      studioAmount -= studioAmount * 0.3;
    }
  }

  if (inputMonth === MONTH_JUNE || inputMonth === MONTH_SEPTEMBER) {
    studioAmount = PRICE_STUDIO_JUNE_SEPTEMBER * inputNightsCount;
    apartmentAmount = PRICE_APARTMENT_JUNE_SEPTEMBER * inputNightsCount;

    if (inputNightsCount > 14) {
      studioAmount -= studioAmount * 0.2;
    }
  }

  if (inputMonth === MONTH_JULY || inputMonth === MONTH_AUGUST) {
    studioAmount = PRICE_STUDIO_JULY_AUGUST * inputNightsCount;
    apartmentAmount = PRICE_APARTMENT_JULY_AUGUST * inputNightsCount;
  }

  if (inputNightsCount > 14) {
    apartmentAmount -= apartmentAmount * 0.1;
  }

  console.log(`Apartment: ${apartmentAmount.toFixed(2)} lv.`);
  console.log(`Studio: ${studioAmount.toFixed(2)} lv.`);
}