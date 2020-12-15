function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
};

console.log(normalizeInput('Привет мир') );//возвращает 'привет мир'.
console.log(normalizeInput('Это НЕ СпаМ'));// возвращает 'это не спам'.
console.log(normalizeInput('Большие СКИДКИ'));// возвращает 'большие скидки'.
