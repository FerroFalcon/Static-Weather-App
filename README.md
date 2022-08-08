# ⛅ Weather App

This is a Weather Application made with fetch API concept of JavaScript. This App takes City name as an input and provides the weather details in the output. The Output details include City Name, Temperature, Humidity, Wind Speed and Weather Description.

## 👨‍💻About me

I am a Student at Times Professional Learning, for Full Stack Web Development course. 

## ⚙️Usage
The Project uses this following promise to fetch the API data from the weather API server.

```JavaScript
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services")
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
```

## 🤝Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## 📑Submission
This project is made for the purpose of project submission of the JavaScript Module of the mentioned course in TimesPro.
This project is to be submitted to Mrs. Oaindrila Das Ma'am

## 🖋️Author
JaideepGhungharwal @FerroFalcon