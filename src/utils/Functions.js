export function dateConverter(dateObj) {
  const year = dateObj.getFullYear().toString();
  const minusMonth = dateObj.getMonth() + 1;
  const month = minusMonth.toString().padStart(2, '0');
  const day = dateObj.getDate().toString().padStart(2, '0');
  const result = `${year}-${month}-${day}`;
  return result;
}