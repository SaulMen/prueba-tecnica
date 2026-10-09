const express = require('express');
const router = express.Router();
const colaboradorController = require('../controllers/colaborador.controller');

router.get('/', colaboradorController.getColaboradores);

router.post('/', colaboradorController.createColaborador);

router.put('/:id', colaboradorController.updateColaborador);

router.delete('/:id', colaboradorController.deleteColaborador);

module.exports = router;