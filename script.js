document.getElementById("convertBtn").addEventListener("click", function () {
  const celsius = parseFloat(document.getElementById("celsius").value);
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  let result;

  if (!isNaN(celsius)) {
    result = (celsius * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).textContent = `${celsius}°C is ${result.toFixed(2)}°F`;
  } else if (!isNaN(fahrenheit)) {
    result = ((fahrenheit - 32) * 5) / 9;
    document.getElementById(
      "result"
    ).textContent = `${fahrenheit}°F is ${result.toFixed(2)}°C`;
  } else {
    document.getElementById("result").textContent =
      "Please enter a value in either Celsius or Fahrenheit.";
  }
});
