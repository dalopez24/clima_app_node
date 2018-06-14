let axios = require('axios')
const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion)

    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyChaGtSCGYhGQaVADln5NS0NIdbegi1CNU `)


    if (response.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    let location = response.data.results[0]
    let coords = location.geometry.location

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}


module.exports = {
    getLugarLatLng
}