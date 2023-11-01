const express = require('express');

const app = express();
const port = process.env.PORT || 3000;


// Set the view engine to 'hbs'
app.set('view engine', 'hbs');

async function fetchWeatherData() {
    // Replace this with your preferred weather API.
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=29ece9af59f6ee535b493003a74054c2&units=metric');
  
    return response.json();
  }
  

  app.get('/', (req, res) => {

    res.send('Got a POST request')
  
  })


app.get('/weather', async (req, res) => {
  // Fetch the weather data from an API.
  const weatherData = await fetchWeatherData();

  console.log(weatherData)

  // Display the weather data to the user.
  res.render('index', { weatherData });
});


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
  
  })