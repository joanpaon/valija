// Importa el módulo "express"
var express = require('express');

/**
 * http://expressjs.com/es/guide/routing.html
 */
var router = express.Router();

/**
 * GET home page.
 */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

// Exporta el enrutador
module.exports = router;