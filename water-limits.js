/* water-limits.js */

// Require Module Convertor
const { celsiusToFahrenheit,
    fahrenheitToCelsius } = require('./converter');


// Input dari Process Argv
const degreeInput = process.argv[2];

console.log('ini input =>>', degreeInput);


// Proses dari function di mobile

const fahrenheitFromCelsius = celsiusToFahrenheit(+degreeInput);

const celsiusFromFahrenheit = fahrenheitToCelsius(fahrenheitFromCelsius);

// Tampilan Hasil

console.log(`Input: ${degreeInput}, hasil pertama: ${fahrenheitFromCelsius}, hasil kedua: ${celsiusFromFahrenheit}`);