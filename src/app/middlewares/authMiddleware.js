class AuthMiddleware {
    constructor(){}

    verifyToken(req,res,next){
          const { authorization } = req.headers;
          
        if(!authorization){
            return res.status(401).json({
                msg:'[AUTH] - TOKEN NAO ENVIADO!'
            })
        }

        if(authorization.split(' ')[1] == 'afw1234'){
            next()
        }else{
            return res.status(401).json({
                msg:'[AUTH] - TOKEN INVALIDO!'
            })
        }
    }
}

module.exports = new AuthMiddleware()