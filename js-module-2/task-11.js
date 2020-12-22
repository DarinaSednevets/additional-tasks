function calculateEngravingPrice(message, pricePerWord) {
    const newMessage = message.split(' ');
    const price = newMessage.length * pricePerWord;
    return price;
}




console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));// возвращает 50.
console.log(calculateEngravingPrice('JavaScript у меня в крови', 20) );//возвращает 100.
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40) );//возвращает 160.
console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 20) );//возвращает 80.