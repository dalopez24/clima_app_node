const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'direccion de una ciudad para obtener el clima',
            demand: true
        }
    })
    .argv

module.exports = {
    argv
}