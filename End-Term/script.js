function convertTemperature() {
  const input = document.getElementById("celsiusInput");
  const resultDiv = document.getElementById("result");

  const celsius = parseFloat(input.value);

  if (celsius === undefined || celsius === null || !Number.isFinite(celsius)) {
    resultDiv.textContent = "Please enter a valid temperature in Celsius.";
    return;
  }
  const fahrenheit = (celsius * 9 / 5) + 32;

  resultDiv.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}
 