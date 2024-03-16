const apiKey = ''; // OpenWeather API key | USE YOURS!!

function dateTime() {
    const date = new Date();
    let today = date.toDateString();
    let time = date.toLocaleTimeString();
    document.getElementById('date-time').innerHTML = `<p id="date">${today}</p><p id="time">${time}</p>`;
    setTimeout(dateTime, 1000);
}

function weatherBalloon(cityID) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}&units=imperial`)
        .then(function(resp) {
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }
            return resp.json();
        })
        .then(function(data) {
            console.log('API Response:', data);
            let weatherIcon = data.weather[0].icon;
            let tempF = Math.round(data.main.temp); // Temperature in Fahrenheit
            document.getElementById('weather').innerHTML = `<p id="location">${data.name}</p><p id="details" title="${tempF}&deg;F"><img src="https://openweathermap.org/img/wn/${weatherIcon}.png">${data.weather[0].description}<span class="separator">|</span>${tempF}&deg;F</p>`;
        })
        .catch(function(error) {
            console.error('Error fetching weather data:', error);
        });
}

function traichu() {
    if (!document.getElementById('date-time')) {
        console.error("Element with ID 'date-time' not found.");
        return;
    }

    dateTime();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=imperial`)
                .then(function(resp) {
                    return resp.json();
                })
                .then(function(data) {
                    let weatherIcon = data.weather[0].icon;
                    let tempF = Math.round(data.main.temp);
                    document.getElementById('weather').innerHTML = `<p id="location">${data.name}</p><p id="details" title="${tempF}&deg;F"><img src="https://openweathermap.org/img/wn/${weatherIcon}.png">${data.weather[0].description}<span class="separator">|</span>${tempF}&deg;F</p>`;
                });
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
        weatherBalloon(1850147); // Default location
    }
}

traichu();
