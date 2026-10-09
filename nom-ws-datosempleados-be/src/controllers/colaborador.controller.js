const colaboradorService = require('../services/colaborador.service');

const getColaboradores = async (req, res, next) => {
  try {
    const colaboradores = await colaboradorService.obtenerTodos();
    
    res.status(200).json({
      ok: true,
      mensaje: 'Colaboradores obtenidos exitosamente',
      data: colaboradores
    });
  } catch (error) {
    next(error); 
  }
};

const createColaborador = async (req, res, next) => {
    try {
        const datos = req.body;

        if(!datos.nombre || !datos.apellido || !datos.edad){
            return res.status(400).json({
                ok: false,
                mensaje: "Error, campos del colaborador obligatorios"
            });
        }

        const colaborador = await colaboradorService.crearColaborador(datos)
        res.status(201).json({
            ok: true,
            mensaje: 'Colaborador creado existosamente',
            data: colaborador
            });
    } catch (error) {
        next(error);
    }
};

const updateColaborador = async (req, res, next) => {
    try {
        const datos = req.body;
        const {id} = req.params;

        if (isNaN(id)){
            return res.status(400).json({
                ok: false,
                mensaje: "Error, el id del colaborador no es válido"
            });
        }

        if(Object.keys(datos).length === 0){
            return res.status(400).json({
                ok: false,
                mensaje: "Error, No hay campos a actualizar"
            });
        }

        const colaborador = await colaboradorService.actualizarColaborador(id, datos)
        res.status(200).json({
            ok: true,
            mensaje: 'Colaborador actualizado existosamente',
            data: colaborador
            });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({
                ok: false,
                mensaje: `El ID del colaborador no existe`
            });
        }
        next(error);
    }
};

const deleteColaborador = async (req, res, next) => {
    try {
        const {id} = req.params;

        if (isNaN(id)){
            return res.status(400).json({
                ok: false,
                mensaje: "Error, el id del colaborador no es válido"
            });
        }

        const colaborador = await colaboradorService.eliminarColaborador(id)
        res.status(200).json({
                ok: true,
                mensaje: 'Colaborador eliminado existosamente'
            });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({
                ok: false,
                mensaje: `El ID del colaborador no existe`
            });
        }
        next(error);
    }
};

module.exports = {
  getColaboradores,
  createColaborador,
  updateColaborador,
  deleteColaborador,
};