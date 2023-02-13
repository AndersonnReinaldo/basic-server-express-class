const Express = require('express')()
const { json } = require('express')
const router = require('../routes')
const PORT = process.env.PORT || 3588

class Server {
    constructor(){
      this.init()  
    }

    init(){
        this.configRoutes()
        this.configRequest()
        this.upServer()
    }

    configRoutes(){
        Express.use(router)
    }

    configRequest(){
        Express.use(json())
    }

    upServer(){
        Express.listen(PORT,() => {
            console.log(`[SERVER] - Server is running on port ${PORT}🔥`)
        })
    }
}

module.exports = Server