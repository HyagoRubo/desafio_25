function converterTemperatura() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitOutput = document.getElementById("fahrenheit");
    const kelvinOutput = document.getElementById("kelvin");

    const celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        fahrenheitOutput.textContent = fahrenheit.toFixed(2) + "°F";
        kelvinOutput.textContent = kelvin.toFixed(2) + "K";
    } else {
        fahrenheitOutput.textContent = "Informe uma temperatura válida";
        kelvinOutput.textContent = "";
    }
}