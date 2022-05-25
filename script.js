let weather = {
    "apikey": "ba2e457f4efab9e177a136eed0c891a7",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector('.city').textContent = "Weather in " + name;
        document.querySelector('.icon').src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector('.description').textContent = description;
        document.querySelector('.humidity').textContent = "Humidity: " + humidity + "%";
        document.querySelector('.temp').textContent = temp + "°C";
        document.querySelector('.wind').textContent = "Wind Speed: " + speed + " km/h";
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')";
    },
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    },
};

document.querySelector('.search button').addEventListener('click', function () {
    weather.search();
})


document.querySelector('.search-bar').addEventListener('keyup', function (e) {
    if (e.key == 'Enter')
        weather.search();
});