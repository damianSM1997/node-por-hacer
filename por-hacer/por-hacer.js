const fs = require('fs');

let listadoPorHacer = [];

const guaardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);


    //const data = new Uint8Array(Buffer.from(data1));
    // aqui se pone la direccion de la carpeta de destino aguardar
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);

    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


    //console.log(listadoPorHacer);
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guaardarDB();
    return porHacer;
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guaardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    //filter permite filtrar un nuevo areglo
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    //length es le longitud si tienen la misma longitud quiere decir que no paso nada
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guaardarDB();
        return true;
    }


}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

}