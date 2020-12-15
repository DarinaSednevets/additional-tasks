function getSubstring(string, length) {
  const substring = string.slice(string , length); 

  return substring;
};

console.log(getSubstring('Привет мир', 3)); //возвращает 'При'.
console.log(getSubstring('Привет мир', 6)); //возвращает 'Привет'.
console.log(getSubstring('Привет мир', 8)); //возвращает 'Привет м'.
console.log(getSubstring('Привет мир', 10)); //возвращает 'Привет мир'.
console.log(getSubstring('Привет мир', 0)); //возвращает ''.