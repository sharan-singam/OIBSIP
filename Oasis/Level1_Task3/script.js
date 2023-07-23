function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitSelect = document.getElementById("unitSelect").value;
    let convertedTemperature;
    let convertedUnit;

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for the temperature.");
        return;
    }

    if (unitSelect === "celsius") {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        convertedUnit = "Fahrenheit";
    } else if (unitSelect === "fahrenheit") {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        convertedUnit = "Celsius";
    } else if (unitSelect === "kelvin") {
        convertedTemperature = temperatureInput + 273.15;
        convertedUnit = "Kelvin";
    }

    const resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}