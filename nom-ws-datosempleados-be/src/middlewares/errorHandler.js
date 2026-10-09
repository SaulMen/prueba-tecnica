const errorHandler = (err, req, res, next) => {
  console.error('[Error detectado]:', err.message);

  const statusCode = err.statusCode || 500;
  
  res.status(statusCode).json({
    ok: false,
    mensaje: err.message || 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined 
  });
};

module.exports = errorHandler;