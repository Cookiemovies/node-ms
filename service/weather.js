const axios = require('axios');
const apiKey = 'fa270a60ae35c0288e6dd99491e5b6bd';

async function getWeather(townName) {
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${townName}&units=metric&appid=${apiKey}`;

    try {
      const result = await axios(endpoint);
      const data = result.data;
      console.log(data);
      return data;
    }
    catch (error) {
      console.log("Error in getting weather data");
      // return '{ "error":"Error getting data from openweathermap" }';
    }
}

var weather = {
    findName: async function (req, res) {
        const townName = req.params.name;
        const found = await getWeather(townName);
        console.log(found);

        if (found) {
            console.log("Weather found by Town Name: " + townName);
            res.send(found);
        } else {
            console.log("Weather not found by Town Name:" + townName);
            res.status(404).send("Weather not found by Town Name: " + townName);
        }
    },
};

module.exports = weather;
