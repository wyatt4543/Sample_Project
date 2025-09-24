const weather = {
    city: "New York",
    temperature: 75,
    condition: "sunny",

    getWeather() {
        const randomTemperature = Math.floor(Math.random() * 75);
        const conditions = ["Sunny", "Windy", "Rainy", "Snow"];
        const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];

        this.temperature = randomTemperature;
        this.condition = randomCondition;
    },
};

function updateWeatherUI() {
    document.getElementById("city-name").textContent = weather.city;
    document.getElementById("temperature").textContent = weather.temperature;
    document.getElementById("condition").textContent = weather.condition;
}

updateWeatherUI();

document.getElementById("refresh-weather").addEventListener("click", () => {
    const message = weather.getWeather();
    updateWeatherUI();
    document.getElementById("message").textContent = message;
});