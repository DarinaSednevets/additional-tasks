function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(item => {
   totalPrice += item 
  });

  // Пиши код выше этой строки
  return totalPrice;
}

  

console.log(calculateTotalPrice([12, 85, 37, 4]));//возвращает 138.
console.log(calculateTotalPrice([164, 48, 291]) )//возвращает 503.
console.log(calculateTotalPrice([412, 371, 94, 63, 176])) //возвращает 1116.