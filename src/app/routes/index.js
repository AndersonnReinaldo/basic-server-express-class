const { Router } = require('express')
const BasicRoutes = require('./basicRoutes/basic.routes')
const router = Router()

new BasicRoutes(router)

module.exports = router