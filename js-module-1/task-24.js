function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  if (totalSpent >= 50000){
    discount = GOLD_DISCOUNT
  } if (totalSpent >= 20000 && totalSpent < 50000){
    discount = SILVER_DISCOUNT
  } if (totalSpent >= 5000 && totalSpent < 20000){
   discount = BRONZE_DISCOUNT
    } if (totalSpent < 5000) {
        discount = BASE_DISCOUNT
    };
    return discount;
    };
    
    
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300)); 
console.log(getDiscount(5000)); 
console.log(getDiscount(20000));
console.log(getDiscount(50000));