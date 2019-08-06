export function priceConverter(price, currency, currentCurrancy) {
  let usd, eur;
  if (currentCurrancy === null) {
    usd = 64;
    eur = 73;
  } else {
    usd = currentCurrancy.usd;
    eur = currentCurrancy.eur;
  }

  if (currency === "usd") {
    price = Number(price) / usd;
    price = price.toFixed(2);
    price = String(price)
      .split("")
      .reverse()
      .join("");
    price = String(price).replace(/(\d{3})/gi, "$& ");
    price = String(price)
      .split("")
      .reverse()
      .join("");
    price = price + " $";
  } else if (currency === "eur") {
    price = Number(price) / eur;
    price = price.toFixed(2);
    price = String(price)
      .split("")
      .reverse()
      .join("");
    price = String(price).replace(/(\d{3})/gi, "$& ");
    price = String(price)
      .split("")
      .reverse()
      .join("");
    price = price + " €";
  } else {
    price = String(price)
      .split("")
      .reverse()
      .join("");
    price = String(price).replace(/(\d{3})/gi, "$& ");
    price = String(price)
      .split("")
      .reverse()
      .join("");
    price = price + " ₽";
  }

  return price;
}
