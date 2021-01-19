const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
      for (let potion of this.potions) {
          if (oldName === potion) {
              let index = this.potions.indexOf(potion)
              this.potions.splice(index, 1, newName)
             
       }
      }
      return this.potions;
  },
};
atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');//, в свойстве potions будет массив ['Зелье скорости', 'Полиморф', 'Каменная кожа'].
console.log(atTheOldToad.potions);