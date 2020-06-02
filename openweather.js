class OpenWeather{
    constructor(){
        //warning: EXPOSING CRITICAL INFO
        
        //API key
        this.appid = '3499ae3e6bc6e1ca72a7199ca199de6a';
    }


    async getWeather(city){
        //Fetch weather data
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.appid}`);

        let weatherDataJson = await weatherData.json();
        // console.log(weatherDataJson.weather[0].main);
        // console.log(weatherDataJson.weather[0].description);

        return weatherDataJson;


    }
}
