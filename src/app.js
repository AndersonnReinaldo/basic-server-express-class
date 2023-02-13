require('node-env')
const Server = require("./app/services/server.js");

class App {
    constructor(){
        this.init()
    }

    init(){
        this.ConfigServer()
    }

    ConfigServer(){
        console.log('[APP] - Configurando server...')
        new Server()
    }
}

module.exports = new App() 