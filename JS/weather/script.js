console.log("hey it's me!");

function convertToCelcius(temp){
    return Math.round((temp * 9/5) + 32);
}

async function fetchWeather(element){
    // console.log(element.value);

    var response = await fetch("https://www.metaweather.com/api/location/" + element.value);
    var data = await response.json();
    console.log(data);

    console.log(data.consolidated_weather[0]);

    //change day 1
    document.getElementById("day1Description").innerText = data.consolidated_weather[0].weather_state_name;
    document.getElementById("day1img").src = "https://www.metaweather.com/static/img/weather/" + data.consolidated_weather[0].weather_state_abbr + ".svg";
    document.getElementById("day1LowTemp").innerText = convertToCelcius(data.consolidated_weather[0].min_temp);
    document.getElementById("day1HiTemp").innerText = convertToCelcius(data.consolidated_weather[0].max_temp);

    //change day 2
    document.getElementById("day2Description").innerText = data.consolidated_weather[1].weather_state_name;
    document.getElementById("day2img").src = "https://www.metaweather.com/static/img/weather/" + data.consolidated_weather[1].weather_state_abbr + ".svg";
    document.getElementById("day2LowTemp").innerText = convertToCelcius(data.consolidated_weather[1].min_temp);
    document.getElementById("day2HiTemp").innerText = convertToCelcius(data.consolidated_weather[1].max_temp);

    //change day 3
    document.getElementById("day3Description").innerText = data.consolidated_weather[2].weather_state_name;
    document.getElementById("day3img").src = "https://www.metaweather.com/static/img/weather/" + data.consolidated_weather[2].weather_state_abbr + ".svg";
    document.getElementById("day3LowTemp").innerText = convertToCelcius(data.consolidated_weather[2].min_temp);
    document.getElementById("day3HiTemp").innerText = convertToCelcius(data.consolidated_weather[2].max_temp);
}