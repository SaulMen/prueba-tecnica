const colaboradorRoutes = require('./routes/colaborador.routes');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/v1/status', (req, res) => {
    res.status(200).json(
        { 
            status: 'OK', 
            message: 'Funcionando correctamente'
        });
});

app.use('/api/v1/colaboradores', colaboradorRoutes);

app.use(errorHandler);

module.exports = app;