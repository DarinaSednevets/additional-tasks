function getShippingCost(country) {
  let message;
  let price ;
 
switch ( country){
  case 'Китай':
        price = 100;
        return message = `Доставка в ${country} будет стоить ${price} кредитов`;

    
    case 'Чили':
        price = 250;
        return message = `Доставка в ${country} будет стоить ${price} кредитов`;
   
    
    case 'Австралия ':
        price = 170;
        return message = `Доставка в ${country} будет стоить ${price} кредитов`;

    
    case 'Ямайка':
    price = 120;
    return message = `Доставка в ${country} будет стоить ${price} кредитов`;
    
    
    default :
    message = 'Извините, в вашу страну доставки нет';
};
  
  return message ;
};

console.log(getShippingCost('Австралия'));// возвращает 'Доставка в Австралия будет стоить 170 кредитов'.
console.log(getShippingCost('Германия'));// возвращает 'Извините, в вашу страну доставки нет'.
console.log(getShippingCost('Китай') );//возвращает 'Доставка в Китай будет стоить 100 кредитов'.
console.log(getShippingCost('Чили') );//возвращает 'Доставка в Чили будет стоить 250 кредитов'.
console.log(getShippingCost('Ямайка'));// возвращает 'Доставка в Ямайка будет стоить 120 кредитов'.
console.log(getShippingCost('Швеция'));// возвращает 'Извините, в вашу страну доставки нет'.