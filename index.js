/**
 * Converts Fahrenheit to Celsius.
 * @param {number} fahrenheit {Temperature in Fahrenheit}
 * @returns {number}  {the Temperature in Celsius}
 */
function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
/**
 * Describes the Temperature after converting it to Celsius.
 * - if temperature is less than 0 Celsius, its freezing cold.
 * - if temperature is less than 20 Celsius, its pretty cold.
 * - if temperature is less than 30 Celsius, its nice and warm.
 * - if temperature is less than 40 Celsius, its kinda toasty.
 * - if temperature is greater than or equal to 40, its blazing hot.
 * @param {number} fahrenheit
 * @returns {String}
 */

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);

  let description;

  if (celsius < 0) {
    description = "its freezing cold";
  } else if (celsius < 20) {
    description = "its pretty cold";
  } else if (celsius < 30) {
    description = "its nice and warm";
  } else if (celsius < 40) {
    description = "its kinda toasty";
  } else if (celsius >= 40) {
    description = "its blazing hot";
  }

  return `${fahrenheit} fahrenheit is ${celsius}°C, ${description}`;
}

// Example usage:
const fahrenheit = prompt("Enter temperature in Fahrenheit:");
const description = describeTemperature(Number(fahrenheit));
alert(description);
