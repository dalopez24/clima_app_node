const axios = require('axios')

const getClima = async(lat, log) => {

    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&units=metric&appid=3cbbada6603069a2d8019a9a4b631391`)
    response = response.data
    return {
        temperatura: response.main.temp
    }
}
module.exports = {
    getClima
}