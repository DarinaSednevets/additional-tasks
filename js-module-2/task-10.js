function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки
//   if(delimeter === ''){
//    words = message.split('');
//   } if (delimeter === ' ') {
//      words = message.split(' ')
//     } if (delimeter === '_') {
//         words = message.split('_');
//     };

    words = message.split(delimeter);
  return words;
};
console.log(splitMessage('Привет_я_Даша', '_'));
console.log(splitMessage('Манго спешит на поезд', ' ') );//возвращает ['Манго', 'спешит', 'на', 'поезд'].
console.log(splitMessage('Манго', ''));// возвращает ['М', 'а', 'н', 'г', 'о'].
console.log(splitMessage('лучшее_за_неделю', '_'));// возвращает ['лучшее', 'за', 'неделю'].