const API_KEY = "e7a1855b00d08b062acf916395274d8e"

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} @${data.main.temp}`;
    });
    }
function onGeoError(){
    alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);