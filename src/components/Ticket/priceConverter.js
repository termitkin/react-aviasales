export function priceConverter (finalPrice, currency) {
  const usd = 64;
  const eur = 73;
  
  if (currency === 'usd') {
    finalPrice = Number(finalPrice) / usd;
    finalPrice = finalPrice.toFixed(2);
    finalPrice = String(finalPrice).split("").reverse().join("");
    finalPrice = String(finalPrice).replace(/(\d{3})/gi, '$& ');
    finalPrice = String(finalPrice).split("").reverse().join("");
    finalPrice = finalPrice + ' $';
    
  }
  else if (currency === 'eur') {
    finalPrice = Number(finalPrice) / eur;
    finalPrice = finalPrice.toFixed(2);
    finalPrice = String(finalPrice).split("").reverse().join("");
    finalPrice = String(finalPrice).replace(/(\d{3})/gi, '$& ');
    finalPrice = String(finalPrice).split("").reverse().join("");
    finalPrice = finalPrice + ' €';
  }
  else {
    finalPrice = String(finalPrice).split("").reverse().join("");
    finalPrice = String(finalPrice).replace(/(\d{3})/gi, '$& ');
    finalPrice = String(finalPrice).split("").reverse().join("");
    finalPrice = finalPrice + ' ₽';
  }
  
  return finalPrice;
}
