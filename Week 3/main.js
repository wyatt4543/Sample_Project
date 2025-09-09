function convertTemperature(){
    const temperatureInput = document.getElementById("temperatureInput").value;
    const conversionType = document.querySelector('input[name="conversion"]:checked');

    let result = "";

    if(temperatureInput !== "" && conversionType) {
        const temperature = parseFloat(temperatureInput);
        const conversion = conversionType.value;
    }

    result = conversion === "CtoF" ? `${temperature} C is ${((temperature * 9) / 5 + 32).toFixed(2)} F` : `${temperature} F is ${((temperature - 32) * 5) / 9).toFixed(2)} C`;
    else {
        result = "please enter a temperature and select a conversion type"
    }

    document.getElementById()
}