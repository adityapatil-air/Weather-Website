const apiKey = "037aa9ff020143f8858ca7ceab9906c6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchlogo=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather_icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".Wind").innerHTML=data.wind.speed+"kmph";

if(data.weather[0].main=="Clouds"){
    weatherIcon.src="clouds.png";
    
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.pngg";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="snow.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main=="Humidity"){
        weatherIcon.src="humidity.png";
    }

}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchlogo.value);
})
searchlogo.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchlogo.value);
    }
});




