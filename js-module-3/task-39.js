const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
          for (let potion of this.potions) {
              if (potion === potionName) {
                  let getIndex = this.potions.indexOf(potion)
                  this.potions.splice(getIndex, 1)
              }
      }
      return this.potions;

  }
}

atTheOldToad.removePotion('Дыхание дракона')//, в свойстве potions будет массив['Зелье скорости', 'Каменная кожа'].
    console.log(atTheOldToad.potions);
// После вотрого вызова метода atTheOldToad.removePotion('Зелье скорости'), в свойстве potions будет массив ['Каменная кожа']