export function stopsText(stops) {
  let text = "";

  if (stops === 1) {
    text = "пересадка";
  } else if (stops > 1 && stops < 5) {
    text = "пересадки";
  } else if (stops > 4) {
    text = "пересадок";
  }

  return text;
}
