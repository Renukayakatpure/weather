//init openWeather class
//   const openweather = new OpenWeather;

class UI {

    constructor () {
        this.weather = document.getElementById('weather');
    }

    //show weather
    showWeather(city,description,temp_min,humidity){
        this.weather.innerHTML = `
        <p><h4>${city} <br>weather description :- ${description} <br>temperature:- ${temp_min} &#730C <br>humidity:- ${humidity}%</h4></p>

        `
    };

    clearOutput(){
        this.weather.innerHTML = '';
    }

}