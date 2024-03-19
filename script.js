const container = document.querySelector(".main-container");
const cityinput = document.querySelector(".search-box input");
const searchbutton = document.querySelector(".search-box button");
const currentweatherdiv = document.querySelector(".weather");
const subcontainer = document.querySelector(".sub-container");
const subweather = document.querySelector(".sub-weather");
const weatherbox = document.querySelector(".weather-box");
const weathercarddiv = document.querySelector(".sub-weather-box");
const weatherdetails = document.querySelector(".weather-details");
const error404 = document.querySelector('.not-found');
const body = document.getElementById('body');

cityinput.addEventListener("keypress",function(event){ // Enter key will also submit the input
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("search").click();
      }
});

const API_KEY = "73dd1bb2d0b242364416b55d9c16791b";

const createweathercard = (weatheritem,index) => {
    mydate=weatheritem.dt_txt.split(" ")[0];      //To make it DD/MM/YYYY format
    mydate_split=mydate.split("-")
    date=mydate_split[2]
    month=mydate_split[1]
    year=mydate_split[0]
    
    if (index === 0) {                           //background image change according to the weather condition
        const iconValue = weatheritem.weather[0].icon;
        if (iconValue ==='01d'){
            body.style.background = 'url(images/clear_sky_day.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }
        else if (iconValue ==='01n'){
            body.style.background = 'url(images/clear_sky_night.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='02d'){
            body.style.background = 'url(images/few_clouds_day.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='02n'){
            body.style.background = 'url(images//few_clouds_night.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='03d'){
            body.style.background = 'url(images/scattered_clouds_day.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='03n'){
            body.style.background = 'url(images/scattered_clouds_night.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='04d'){
            body.style.background = 'url(images/broken_clouds_day.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='04n'){
            body.style.background = 'url(images/broken_clouds_night.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='09d'){
            body.style.background = 'url(images/few_rain_day.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='09n'){
            body.style.background = 'url(images/few_rain_night.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='10d'){
            body.style.background = 'url(images/rain_day.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='10n'){
            body.style.background = 'url(images/rain_night.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='11d'){
            body.style.background = 'url(images/thunderstorm_in_day.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='11n'){
            body.style.background = 'url(images/thunderstorm_in_night.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='13d'){
            body.style.background = 'url(images/snow_day.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='13n'){
            body.style.background = 'url(images/snow_night.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='50d'){
            body.style.background = 'url(images/mist_day.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }else if (iconValue ==='50n'){
            body.style.background = 'url(images/mist_night.jpg)';
            body.style.backgroundSize="cover";
            body.style.backgroundPosition = 'center';
            body.style.transition = '1s ease';
            body.style.transitionDelay ='.1s';
        }
}

    if (index===0){                        //for Today's weather details
        return `
                <div class="weather">
                    <p class="current-date">${date}-${month}-${year}</p>
                    <img src="https://openweathermap.org/img/wn/${weatheritem.weather[0].icon}@2x.png" alt="weather-icon">
                    <p class="temperature">${(weatheritem.main.temp - 273.15).toFixed(2)}<span>°C</span></p>
                    <p class="description">${weatheritem.weather[0].description}</p>
                </div>
                <div class="weather-details">
                    <div class="humidity">
                        <i class='bx bx-water'></i>
                        <div class="text">
                            <div class="info-humidity">
                                <span>${weatheritem.main.humidity}%</span>
                            </div>
                            <p>Humidity</p>
                        </div>
                    </div>

                    <div class="wind">
                        <i class='bx bx-wind'></i>
                        <div class="text">
                            <div class="info-wind">
                                <span>${weatheritem.wind.speed} Km/h</span>
                            </div>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>`;
    }else{       //for further dates weather details
        return `<li class="sub-weather">
                    <p class="date">${date}-${month}-${year}</p>
                    <img src="https://openweathermap.org/img/wn/${weatheritem.weather[0].icon}@2x.png" alt="sub-weather-icon">
                    <p class="temperature">${(weatheritem.main.temp - 273.15).toFixed(2)}<span>°C</span></p>
                    <p class="description">${weatheritem.weather[0].description}</p>
                </li>`
    }
    
}
const getweatherdetails = (cityname,lat,lon) => {
    const weather_api_url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(weather_api_url).then(res => res.json()).then(data => {

        const uniqueforecastdate=[];
        const dates = data.list.filter(forecast => {
            const forecastdate = new Date(forecast.dt_txt).getDate();
            if(!uniqueforecastdate.includes(forecastdate)){
                return uniqueforecastdate.push(forecastdate); 
            }
        });
        currentweatherdiv.innerHTML="";
        weathercarddiv.innerHTML="";
        weatherdetails.innerHTML="";
        const fil=dates.slice(0,4)
        fil.forEach((weatheritem,index) => {
            if (index === 0){
                currentweatherdiv.insertAdjacentHTML("beforeend",createweathercard(weatheritem,index));
            }else{
                weathercarddiv.insertAdjacentHTML("beforeend",createweathercard(weatheritem,index));
            }
        });
    })
};

const get_city_coordinates = () => {
    const cityname = cityinput.value;
    if(!cityname) return;
    const geo_api_url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=${API_KEY}`;
    fetch(geo_api_url).then(res => res.json()).then(data => {
        if(!data.length){                              //if entered city name is not found

            container.style.height="400px";
            weathercarddiv.classList.remove("active")
            weatherbox.classList.remove("active")
            weatherdetails.classList.remove("active")
            currentweatherdiv.classList.remove("active")
            subcontainer.classList.remove("active")
            error404.classList.add("active")

            body.style.background = 'url(images/not_found.jpg)';
            body.style.backgroundSize="cover"
            body.style.backgroundPosition = 'center'
            return;
        }else{

            container.style.height="650px";
            weathercarddiv.classList.add("active")
            weatherbox.classList.add("active")
            weatherdetails.classList.add("active")
            subcontainer.classList.add("active")
            error404.classList.remove("active")
            const {name,lat,lon} = data[0];
            getweatherdetails(name,lat,lon);
        }

    })
}
 searchbutton.addEventListener('click',get_city_coordinates);
