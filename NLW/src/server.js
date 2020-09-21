const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages")

//configurar nunjucks (tamplete engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e configuraçao do servidor
server.use(express.static('public')) //configurar arquivos staticos (css, imagens, scripts)
     //receber os dados do req.body
     .use(express.urlencoded({ extended:true }))
    // rotas da aplicaçao
    .get('/', pageLanding)  // requisiçao e resposta

    .get('/study', pageStudy) // requisiçao e resposta

    .get('/give-classes', pageGiveClasses) // requisiçao e resposta
    
    .post('/save-classes', saveClasses)
.listen(8080)
