/**
 *Se crea un nuevo router que va a contener las rutas de todos los modelos.
 **/
const Router = require('express').Router;
const router = new Router();
const mongoose = require('mongoose');
const config = require('./config/config');
/**
 * Rustas---> Index
 **/
router.route('/ping').get((req, res) => {
  res.send('Pong');
});
const uri = process.env.MONGO_URL|| "mongodb://localhost/test"
router.route('/verificar').get((req, res) => {
  mongoose.connect(uri, function(err, db) {
      if (err) {
        res.send('¡Uy!, parece que tenemos problemas.');
      } else {
        res.send('Estamos conectados a Mongo!');
          mongoose.connection.close()
      }
  });})


/**
 * Se hace llamados a los routes de los modelos
 * y se le asigna un nombre a cada recurso(Recomendacion:Mismo nombre del modelo)
 **/
const estudiante = require('./models/estudiantes');
router.use('/estudiantes', estudiante);


/**
 * Exportamos modelos, este esta implementado en app.js
 **/
module.exports = router;
