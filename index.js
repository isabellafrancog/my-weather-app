let now = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let hour = now.getHours();
let minute = now.getMinutes();

let date = document.querySelector("h5", "#dateNow");
date.innerHTML = `${day} ${hour}:${minute}`;

function cities(event) {
  event.preventDefault();
  let input = document.querySelector("#city");
  let h3 = document.querySelector("#place");
  h3.innerHTML = `${input.value}`;

  search(input.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", cities);

function displayWeather(response) {
  console.log(response.data.main.temp);
  let tempNow = document.querySelector("#temp");

  tempNow.innerHTML = response.data.main.temp;
}
function search(city) {
  let apiKey = "9db7eb713944807071b9838915b210c1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
