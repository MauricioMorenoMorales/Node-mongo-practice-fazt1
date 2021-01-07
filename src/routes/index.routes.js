const { Router } = require('express')
//Iinicializacion
const router = Router()
//MOdulos locales
const { renderAbout, renderIndex } = require('../controllers/index.controllers')

router.get('/', renderIndex)

router.get('/about', renderAbout)

module.exports = router
