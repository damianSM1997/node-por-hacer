const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const competado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado una tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completad de esta tarea', {
        descripcion,
        competado

    })

.command('borrar', 'Borra una tarea', {
        descripcion

    })
    .help()
    .argv;

module.exports = {
    argv
}