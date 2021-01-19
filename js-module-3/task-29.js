const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = { ...defaultSettings, ...overrideSettings };


// Объявлена переменная defaultSettings.
// Значение переменной defaultSettings это объект.
// Объявлена переменная overrideSettings.
// Значение переменной overrideSettings это объект.
// Объявлена переменная finalSettings.
// Значение переменной finalSettings это объект.
// Значение свойства finalSettings.theme равно 'light'.
// Значение свойства finalSettings.public равно 'false'.
// Значение свойства finalSettings.withPassword равно 'true'.
// Значение свойства finalSettings.minNumberOfQuestions равно 10.
// Значение свойства finalSettings.timePerQuestion равно 30.
// При присваивании значения переменной finalSettings используется синтаксис ....