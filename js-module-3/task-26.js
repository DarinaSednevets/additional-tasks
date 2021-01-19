// Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {
    const { today: { low: todayLow, high: todayHigh },
        tomorrow: { low: tomorrowLow, high: tomorrowHigh }
    }= forecast;
    
//   const todayLow = forecast.today.low;
//   const todayHigh = forecast.today.high;
//   const tomorrowLow = forecast.tomorrow.low;
//   const tomorrowHigh = forecast.tomorrow.high;

  // Пиши код выше этой строки
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
};

console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));// возвращает 28.5.
console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));// возвращает 37.
