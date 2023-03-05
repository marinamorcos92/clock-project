function updateDate() {
  let stockholmElement = document.querySelector("#stockholm");
  if (stockholmElement) {
    let stockholmDateElement = stockholmElement.querySelector(".date");
    let stockholmTimeElement = stockholmElement.querySelector(".time");
    let stockholmTime = moment().tz("Europe/Stockholm");

    stockholmDateElement.innerHTML = stockholmTime.format("dddd MMMM	Do YYYY");
    stockholmTimeElement.innerHTML = stockholmTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElement = cairoElement.querySelector(".date");
    let cairoTimeElement = cairoElement.querySelector(".time");
    let cairoTime = moment().tz("Africa/Cairo");

    cairoDateElement.innerHTML = cairoTime.format("dddd MMMM	Do YYYY");
    cairoTimeElement.innerHTML = cairoTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let sydneyElement = document.querySelector("#sydney");
  if (cairoElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("dddd MMMM	Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("-", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `<div class="city">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd MMMM	Do YYYY")}</div>
        <div class="time">${cityTime.format(
          "hh:mm:ss [<small>]A[</small>]"
        )} </div>
     </div>`;
}
updateDate();
setInterval(updateDate, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
