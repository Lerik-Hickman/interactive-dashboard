// Get references to HTML elements
let inputNumField = document.getElementById("conveter-number");
let inputUnitField = document.getElementById("input-unit");
let outputUnitField = document.getElementById("output-unit");
let conversionBtn = document.getElementById("conversion-btn");

function convertUnits(event) {
    // Prevents the form from being submitted
    event.preventDefault();

    // Get values for Conversion
    let inputNum = parseFloat(inputNumField.value);
    let inputUnit = inputUnitField.getElementsByTagName("option")[inputUnitField.selectedIndex].value;
    let outputUnit = outputUnitField.getElementsByTagName("option")[outputUnitField.selectedIndex].value;
   
    // Define function variables
    let validInput = true;
    let outputNum = 0;

    // Input validation
    if (outputUnit === inputUnit) {
    validInput = false;
    document.getElementById("conversion-result").innerHTML = "there is no conversion to be made";

    // Check start and end units then make calculations
    } else if (inputUnit === "miles" || inputUnit === "mile" || inputUnit === "mi") {
    if (outputUnit === "kilometers" || outputUnit === "kilometer" || outputUnit === "km") {
        outputNum = inputNum * 1.61;
    } else if (outputUnit === "meters" || outputUnit === "meter" || outputUnit === "m") {
        outputNum = inputNum * 161;
    } else if (outputUnit === "centimeters" || outputUnit === "centimeter" || outputUnit === "cm") {
        outputNum = inputNum * 16100;
    }
    } else if (inputUnit === "yards" || inputUnit === "yard" || inputUnit === "yd") {
    if (outputUnit === "kilometers" || outputUnit === "kilometer" || outputUnit === "km") {
        outputNum = inputNum * 0.00091;
    } else if (outputUnit === "meters" || outputUnit === "meter" || outputUnit === "m") {
        outputNum = inputNum * 0.91;
    } else if (outputUnit === "centimeters" || outputUnit === "centimeter" || outputUnit === "cm") {
        outputNum = inputNum * 91;
    }
    } else if (inputUnit === "feet" || inputUnit === "foot" || inputUnit === "ft") {
    if (outputUnit === "kilometers" || outputUnit === "kilometer" || outputUnit === "km") {
        outputNum = inputNum * 0.0003048;
    } else if (outputUnit === "meters" || outputUnit === "meter" || outputUnit === "m") {
        outputNum = inputNum * 0.3048;
    } else if (outputUnit === "centimeters" || outputUnit === "centimeter" || outputUnit === "cm") {
        outputNum = inputNum * 30.48;
    }
    } else if (inputUnit === "inches" || inputUnit === "inch" || inputUnit === "in") {
    if (outputUnit === "kilometers" || outputUnit === "kilometer" || outputUnit === "km") {
        outputNum = inputNum * 0.0000254;
    } else if (outputUnit === "meters" || outputUnit === "meter" || outputUnit === "m") {
        outputNum = inputNum * 0.0254;
    } else if (outputUnit === "centimeters" || outputUnit === "centimeter" || outputUnit === "cm") {
        outputNum = inputNum * 2.54;
    }
    } else if (inputUnit === "kilometers" || inputUnit === "kilometer" || inputUnit === "km") {
    if (outputUnit === "miles" || outputUnit === "mile" || outputUnit === "mi") {
        outputNum = inputNum * 0.62;
    } else if (outputUnit === "yards" || outputUnit === "yard" || outputUnit === "yd") {
        outputNum = inputNum * 1090;
    } else if (outputUnit === "feet" || outputUnit === "foot" || outputUnit === "ft") {
        outputNum = inputNum * 3280;
    } else if (outputUnit === "inches" || outputUnit === "inch" || outputUnit === "in") {
        outputNum = inputNum * 39370;
    }
    } else if (inputUnit === "meters" || inputUnit === "meter" || inputUnit === "m") {
    if (outputUnit === "miles" || outputUnit === "mile" || outputUnit === "mi") {
        outputNum = inputNum * 0.00062;
    } else if (outputUnit === "yards" || outputUnit === "yard" || outputUnit === "yd") {
        outputNum = inputNum * 1.09;
    } else if (outputUnit === "feet" || outputUnit === "foot" || outputUnit === "ft") {
        outputNum = inputNum * 3.28;
    } else if (outputUnit === "inches" || outputUnit === "inch" || outputUnit === "in") {
        outputNum = inputNum * 39.37;
    }
    } else if (inputUnit === "centimeters" || inputUnit === "centimeter" || inputUnit === "cm") {
    if (outputUnit === "miles" || outputUnit === "mile" || outputUnit === "mi") {
        outputNum = inputNum * 0.0000062;
    } else if (outputUnit === "yards" || outputUnit === "yard" || outputUnit === "yd") {
        outputNum = inputNum * 0.0109;
    } else if (outputUnit === "feet" || outputUnit === "foot" || outputUnit === "ft") {
        outputNum = inputNum * 0.0328;
    } else if (outputUnit === "inches" || outputUnit === "inch" || outputUnit === "in") {
        outputNum = inputNum * 0.3937;
    }

    // Second input vallidation
    } else {
    validInput = false;
    document.getElementById("conversion-result").innerHTML = "You did not give valid input units. Please try again.";
    }

    // Output result if there is one
    if (validInput) {
    document.getElementById("conversion-result").innerHTML = inputNum + " " + inputUnit + "(s) is " + outputNum + " " + outputUnit + "(s)";
    }
}

conversionBtn.addEventListener("click", () => convertUnits(event), false);
