const fetch = require('node-fetch');
const fs = require('fs');
fetch('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
    .then(res => res.json())
    .then(body =>   body.weather[0].description)
    .then(description => fs.writeFileSync('weather_logs.txt',description,'utf8'))
    .then(r => console.log('sucess!!')