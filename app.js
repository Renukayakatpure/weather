//Init openWeather
const openweather = new OpenWeather;

//init UI class
const ui = new UI;

//get data button
const getData = document.getElementById('bt1').addEventListener('click',cityValue);

let city = '';
let weatherDescription = '';
let temp_min = '';
let temp_max = '';
let humidity = '';

async function cityValue(){

    //Get city name
    city = document.getElementById('searchCity').value;

    //Get city weather
    weathercondition = await openweather.getWeather(city);
    //parse json data
    weatherDescription = (await weathercondition).weather[0].description;   
    temp_min = ((await weathercondition).main.temp_min-273).toFixed(2);
    humidity = (await weathercondition).main.humidity;

    ui.showWeather(city,weatherDescription,temp_min,humidity);   
}