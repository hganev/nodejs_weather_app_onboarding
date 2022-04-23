const request = require('request')

module.exports = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ca3905ea60fa0a5c6fa172bc89957fe0&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to forecast services', undefined)
        } else if (response.body.error) {
            console.log('response.body.error', response.body.error)
            callback('Unable to find location. Please try again', undefined)
        } else {
            const currentWeather = response.body.current
            const temperature = currentWeather.temperature
            const feelsLike = currentWeather.feelslike
            const windSpeed = currentWeather.wind_speed
            const weatherDescription = currentWeather.weather_descriptions[0]
            console.log('currentWeather', currentWeather)
            callback(undefined, `The weather description is ${weatherDescription}. It is currently ${temperature} degrees. It feels like ${feelsLike} out. Wind speed is ${windSpeed} km/h.`)
        }
    })
}