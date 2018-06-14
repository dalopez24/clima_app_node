let argv = require('./config/yargs').argv
let clima = require('./clima/clima')
let lugar = require('./lugar/lugar')


let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugarLatLng(direccion)
        let temperatura = await clima.getClima(coords.lat, coords.lng)
        return `El clima en ${argv.direccion} es de ${temperatura.temperatura}`
    } catch (e) {
        return 'No se pudo determinar el clima en ' + direccion
    }
}

getInfo(argv.direccion).then(respuesta => console.log(respuesta)).catch(err => console.log(err))

// lugar.getLugarLatLng(argv.direccion)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })


// clima.getClima(35, 139)
//     .then(temp => console.log(temp.temperatura))
//     .catch(err => console.log(err))