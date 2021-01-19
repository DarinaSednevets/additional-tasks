// Пиши код ниже этой строки
function findMatches(arr,...numbers) {
  const matches = []; // Не изменяй эту строку
  const numbersArr = [];
  for (let number of numbers){
    if (arr.includes(number)){
      matches.push(number)
    }
  }
  // Пиши код выше этой строки
  return matches;
}
