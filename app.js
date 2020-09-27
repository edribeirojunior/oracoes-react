

const express = require('express')

const app = express()

const baseDir = `${__dirname}/build/`

app.use(express.static(`${baseDir}`))

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

//const port = 8080

app.listen(process.env.PORT, () => console.log(`Servidor subiu com sucesso em http://localhost:${process.env.PORT}`))

