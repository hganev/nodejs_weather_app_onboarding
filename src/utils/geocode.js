const request = require('request');
module.exports = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiaGdhbmV2IiwiYSI6ImNsMXJ2czhlcDB4MmYza29hdGVpNHBuZG4ifQ.P3j7DVmb8iDapWpO6xua7A`

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Please try again', undefined)
        } else {
            callback(undefined, {
                location: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
            })
        }
    })
}