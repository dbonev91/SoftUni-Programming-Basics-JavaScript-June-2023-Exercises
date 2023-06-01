function outfit (inputArray) {
  const degreesInput = Number(inputArray[0]);
  const dayTimeInput = inputArray[1];
   
  const morning = 'Morning';
  const afternoon = 'Afternoon';
  const evening = 'Evening';
   
  const outfitSwearshirt = 'Sweatshirt';
  const outfitShirt = 'Shirt';
  const outfitTShirt = 'T-Shirt';
  const outfitSwimSuit = 'Swim Suit';
   
  const shoesSneakers = 'Sneakers';
  const shoesMoccasins = 'Moccasins';
  const shoesSandals = 'Sandals';
  const shoesBarefoot = 'Barefoot';
   
  let currentOutfit;
  let currentShoes;
   
  if (dayTimeInput === morning) {
    if (degreesInput >= 10 && degreesInput <= 18) {
      currentOutfit = outfitSwearshirt;
      currentShoes = shoesSneakers;
    }
     
    if (degreesInput > 18 && degreesInput <= 24) {
      currentOutfit = outfitShirt;
      currentShoes = shoesMoccasins;
    }
     
    if (degreesInput > 24) {
      currentOutfit = outfitTShirt;
      currentShoes = shoesSandals;
    }
  }
   
  if (dayTimeInput === afternoon) {
    if (degreesInput >= 10 && degreesInput <= 18) {
      currentOutfit = outfitShirt;
      currentShoes = shoesMoccasins;
    }
     
    if (degreesInput > 18 && degreesInput <= 24) {
      currentOutfit = outfitTShirt;
      currentShoes = shoesSandals;
    }
     
    if (degreesInput > 24) {
      currentOutfit = outfitSwimSuit;
      currentShoes = shoesBarefoot;
    }
  }
   
  if (dayTimeInput === evening) {
    if (degreesInput >= 10 && degreesInput <= 18) {
      currentOutfit = outfitShirt;
      currentShoes = shoesMoccasins;
    }
     
    if (degreesInput > 18 && degreesInput <= 24) {
      currentOutfit = outfitShirt;
      currentShoes = shoesMoccasins;
    }
     
    if (degreesInput > 24) {
      currentOutfit = outfitShirt;
      currentShoes = shoesMoccasins;
    }
  }
   
  console.log(`It's ${degreesInput} degrees, get your ${currentOutfit} and ${currentShoes}. `);
}