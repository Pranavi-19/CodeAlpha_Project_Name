function convertTemperature() {
    const inputScale = document.getElementById("input-scale").value;
    const outputScale = document.getElementById("output-scale").value;

    const temperature = parseFloat(document.getElementById("temperature").value);

    if (!isNaN(temperature)) {
        let result;

        if (inputScale === "celsius" && outputScale === "fahrenheit") {
            result = (temperature * 9/5) + 32;
        } else if (inputScale === "celsius" && outputScale === "kelvin") {
            result = temperature + 273.15;
        } else if (inputScale === "fahrenheit" && outputScale === "celsius") {
            result = (temperature - 32) * 5/9;
        } else if (inputScale === "fahrenheit" && outputScale === "kelvin") {
            result = (temperature - 32) * 5/9 + 273.15;
        } else if (inputScale === "kelvin" && outputScale === "celsius") {
            result = temperature - 273.15;
        } else if (inputScale === "kelvin" && outputScale === "fahrenheit") {
            result = (temperature - 273.15) * 9/5 + 32;
        } else {
            result = temperature;
        }

        document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)} ${outputScale}`;
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid temperature value.";
    }
}

// Add an event listener to the Convert button
document.getElementById("convert-button").addEventListener("click", convertTemperature);
