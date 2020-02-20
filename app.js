const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(tabla => console.log(tabla))
            .catch(e => console.log(e))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
}