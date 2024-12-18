document.getElementById("convert-btn").addEventListener("click", () => {
    const temperatureInput = document.getElementById("temperature").value;
    const inputUnit = document.getElementById("input-unit").value;
    const outputUnit = document.getElementById("output-unit").value;
    const outputField = document.getElementById("output");
  
    // Validate input
    if (isNaN(temperatureInput) || temperatureInput.trim() === "") {
      outputField.textContent = "Please enter a valid number.";
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
  
    // Conversion logic
    let convertedTemperature;
  
    if (inputUnit === outputUnit) {
      convertedTemperature = temperature; // No conversion needed
    } else if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
      convertedTemperature = (temperature * 9/5) + 32;
    } else if (inputUnit === "celsius" && outputUnit === "kelvin") {
      convertedTemperature = temperature + 273.15;
    } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
      convertedTemperature = (temperature - 32) * 5/9;
    } else if (inputUnit === "fahrenheit" && outputUnit === "kelvin") {
      convertedTemperature = (temperature - 32) * 5/9 + 273.15;
    } else if (inputUnit === "kelvin" && outputUnit === "celsius") {
      convertedTemperature = temperature - 273.15;
    } else if (inputUnit === "kelvin" && outputUnit === "fahrenheit") {
      convertedTemperature = (temperature - 273.15) * 9/5 + 32;
    }
  
    // Display the result
    outputField.textContent = `${convertedTemperature.toFixed(2)} °${outputUnit[0].toUpperCase()}`;
  });
  