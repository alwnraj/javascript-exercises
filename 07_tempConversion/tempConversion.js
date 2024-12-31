const convertToCelsius = function(a) {
  const result = ((a - 32) * (5/9));
  return parseFloat(result.toFixed(2));
};

const convertToFahrenheit = function(a) {
  const result = (((a * (9/5))+32))
  return parseFloat(result.toFixed(2))
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
