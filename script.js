let weather = {
  apiKey: "QKG6ZHNRDDG7BCNZX4VKKGFVC",

  // Promise to fetch api data
  fetchWeather: function (city) {
    fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        city +
        "?unitGroup=metric&key=" +
        this.apiKey +
        "&contentType=json"
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  // Function to display data using query selectors
  displayWeather: function (data) {
    const { address } = data;
    const { icon, temp, humidity, windspeed } = data.currentConditions;
    const { description } = data;

    // console.log(address, icon, description, temp, humidity, windspeed);

    // Using qquery selectors to display api data to html elements
    document.querySelector(".city").innerText = address;
    document.querySelector(".icon").src =
      "https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/3rd%20Set%20-%20Color/" +
      icon +
      ".svg";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity-value").innerText = humidity + "%";
    document.querySelector(".wind-value").innerText = windspeed + " km/h";

    document.querySelector(".weather").classList.remove("loading");
    document.querySelector(".card").classList.remove("load");

    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?landscape-" + address + "')";
  },

  // Function to get value from search bar
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

// Button Click Action
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

// Enter Button Action
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
