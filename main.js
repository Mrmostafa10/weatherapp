/*
- JSON
- API / ex
- Githup
*/

// browser( client ) --->     JSON      <--- server

// browser( client ) --->     API      <--- server
//                          (request)
//                         (response) 

// console.log("1");
// console.log(alert("2"));
// console.log("3");

// let api = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => console.log(data[4].website))

/*
get
post
put
delete
*/

/*
body params
path params/
query params/?key=   ,value=
*/


const searchBtn = document.querySelector("button")
const searchBox = document.querySelector("input")

async function checkWeather(city){
// console.log(city);
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=` + city + "&appid=4b24e1d28504462b0bdac7fc3bda8a46")
const data = await response.json()
console.log(data);
document.querySelector(".country").innerHTML= "Country : " + data.sys.country
document.querySelector(".city").innerHTML= "City : " + data.name
document.querySelector(".temp").innerHTML= "Temp : " + Math.floor(data.main.temp) + " <sup>o</sup>C"
document.querySelector(".speed").innerHTML= "Speed : " + Math.round(data.wind.speed) + " km/h"
}

searchBtn.addEventListener("click" , ()=>{checkWeather(searchBox.value)})