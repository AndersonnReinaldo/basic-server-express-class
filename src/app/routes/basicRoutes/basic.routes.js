const { verifyToken } = require('../../middlewares')

class BasicRoutes {
    constructor(router){
        this.initRoutes(router)
    }

    initRoutes(router){
        router.get('/',verifyToken,(req,res) => {
            return res.status(200).json({
                msg:'Hello word!'
            })
        })
    }
}

module.exports = BasicRoutes