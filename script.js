function convertTemperature() {
    var tempInput = document.getElementById("temp");
    var fromSelect = document.getElementById("from");
    var toSelect = document.getElementById("to");
    var resultElement = document.getElementById("result");

    var temperature = parseFloat(tempInput.value);
    var fromUnit = fromSelect.value;
    var toUnit = toSelect.value;

    if (isNaN(temperature)) {
        resultElement.innerText = "Por favor, insira um valor numérico válido.";
        return;
    }

    var convertedTemp;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        convertedTemp = (temperature * 9 / 5) + 32;
        resultElement.innerText = "A temperatura em Fahrenheit é: " + convertedTemp.toFixed(2) + " °F";
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        convertedTemp = (temperature - 32) * 5 / 9;
        resultElement.innerText = "A temperatura em Celsius é: " + convertedTemp.toFixed(2) + " °C";
    } else {
        resultElement.innerText = "Selecione unidades de temperatura válidas.";
    }
}
