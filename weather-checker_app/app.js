const weatherNameOfTown = document.getElementById("weatherNameOfTown");
const weatherTemperature = document.getElementById("weatherTemperature");
const weathterHuminity = document.getElementById("weathterHuminity");
const WheatherStatus = document.getElementById("WheatherStatus");
const button = document.querySelector("button");
document.querySelector(".main").style.display = "none"

document.getElementById("input").addEventListener( 'keydown', event => {
    if( event.code === 'Enter' ) {
        toCatchDataWeather();
        button.style.fontSize = "1.25rem";
    };
});

document.getElementById("input").addEventListener( 'keyup', event => {
    if( event.code === 'Enter') {
        button.style.fontSize = "1rem";
    };
});

async function toCatchDataWeather () {
    try {
        const inputData = document.getElementById("input").value; 
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=959c9f70b7484b4caf5195411242211&q=${inputData}&aqi=no`);
        const data = await response.json();
        changeTheTownTitle(data.location.name);
        changeTheTemp(data.current.temp_c);
        changeTheHumidity(data.current.humidity);
        changeTheWind(data.current.wind_kph);
        document.querySelector(".main").style.display = "block";
        console.log(data)

    }
    catch (error) {
        console.error("your fault")

    };
    console.log("hello")
};
function changeTheTownTitle(name) {
    weatherNameOfTown.textContent = name; 
};
function changeTheTemp(temp) {
    weatherTemperature.textContent = `temperatury: ${temp} C`;
};
function changeTheHumidity(humanity) {
    weathterHuminity.textContent = `humanity: ${humanity} %`;
};
function changeTheWind(wind) {
    WheatherStatus.textContent = `wind: ${Math.floor(wind*1000/3600)} mps`;
};
function checkerTheColor(temp) {
    if(temp > 0) {

    } else {
    
    };
};