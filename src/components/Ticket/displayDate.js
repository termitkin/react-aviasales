export function displayDate(str) {
  const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "май",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек"
  ];
  // eslint-disable-next-line
  const i = str.replace(/(\d+)\.(\d+)\.(\d+)/g, `20$3-$2-$1`);
  const d = new Date(i);

  return (
    d.getDate() +
    " " +
    months[d.getMonth()] +
    " " +
    d.getFullYear() +
    ", " +
    days[d.getDay()]
  );
}
