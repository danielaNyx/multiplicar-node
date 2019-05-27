//Requireds
const fs = require('fs');
const colors = require('colors');
//const fs = require('express'); No existe en la documentacion de node
//const fs = require('./path'); Archivos que nosotros escribimos en algun lado de nuestro proyecto

let listarTabla = (base, limite = 10) => {

    console.log('===================================='.rainbow);
    console.log(`=========== Tabla del ${base} ============`.rainbow);
    console.log('===================================='.rainbow);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base * i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-lim-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-lim-${limite}.txt`)
        });

    })

}

module.exports = {
    crearArchivo,
    listarTabla,
}