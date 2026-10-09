const prisma = require('../config/prisma');

const obtenerTodos = async () => {
  return await prisma.colaborador.findMany(); 
};

const crearColaborador = async (datosColaborador) => {
    return await prisma.colaborador.create({
        data: datosColaborador,
    });
}

const actualizarColaborador = async (id, datosColaborador) => {
    return await prisma.colaborador.update({
        where: {idcolaborador: Number(id)},
        data: datosColaborador,
    });
}

const eliminarColaborador = async (id) => {
    return await prisma.colaborador.delete({
        where: {idcolaborador: Number(id)}
    });
}

module.exports = {
  obtenerTodos,
  crearColaborador,
  actualizarColaborador,
  eliminarColaborador,
};