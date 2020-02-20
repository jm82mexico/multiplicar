const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base introducida no es un número')
            return
        }
        if (!Number(limite)) {
            reject('El limite introducido no es un numero')
            return
        }
        console.log('==============================='.green);
        console.log(`======tabla del ${base}========`.red);
        console.log('==============================='.green);
        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        resolve(data)


    });

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base introducida no es un número');
            return
        }
        if (!Number(limite)) {
            reject('El limite introducido no es un numero')
            return
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
        })

    });



};

module.exports = {
    crearArchivo,
    listarTabla
}