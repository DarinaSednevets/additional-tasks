const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  // Пиши код ниже этой строки
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `В ассортименте нет пиццы с названием «${pizzaName}».`;
    }

    return `Заказ принят, готовим пиццу «${pizzaName}».`;
  },
  // Пиши код выше этой строки
};


console.log(pizzaPalace.order('Аль Копчино'));// возвращает строку 'Заказ принят, готовим пиццу «Аль Копчино».'.
console.log(pizzaPalace.order('Четыре нарезона') );//возвращает строку 'Заказ принят, готовим пиццу «Четыре нарезона».'.
console.log(pizzaPalace.order('Биг майк'));// возвращает строку 'В ассортименте нет пиццы с названием «Биг майк».'.
console.log(pizzaPalace.order('Венская'));// возвращает строку 'В ассортименте нет пиццы с названием «Венская».'.
// Метод checkPizza объекта pizzaPalace использует this.
// Метод order объекта pizzaPalace использует this.