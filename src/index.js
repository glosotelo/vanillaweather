function CurentDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayIndex = date.getDay();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = days[dayIndex];
  return `$day{day} ${hours}:${minutes}`;
}
let currentTime = new Date();
let dateElement = document.querySelector("#day-and-time");

dateElement.innerHTML= updatedDay(currentTime);

function formatDays (timestamp) {
    let date = new Date (timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
}

function showDailyForecast(response) {
    let forecastElement =document.querySelector("#forecast");
    
    let forecastHTML = `<div class="row"`;
    forecastElement.forEach(function (forecastDay, index) {
        if (index < 6) {
            forecastHTML= forecastHTML + `<div class="col-2">
            <div class="day">${formatDays}(forecastDay.dt)}</div>
            <img src= "http://openweathermap.org/img/wn/${
                forecastDay.weather[0].icon}@2x.png"
                alt=""
                width="50"
                />
                <div class= "forecast-temperature">
                <span class= "forecast-temp-max">${Math.round(forecastDay.temp.max)}
                <span class= "degrees-symbol-max">°</span>
                </span>
                <span class = "degrees-symbol-min">${Math.round(forecastDay.temp.min)}
                <span class= "degrees.symbol-min">°</span>
            </span>
            </div>
            </div>`;
        }
    });

    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML;

    
