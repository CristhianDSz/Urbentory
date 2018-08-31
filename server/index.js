const http = require('http')
const express = require('express')
const myConnection = require('./database/connection')
const cors = require('cors')

const app = express()

const router = require('./routes/routes')

//Settings
app.set('port', process.env.PORT || 3000)


//Middlewares
app.use(express.json())
app.use(cors({origin:'http://localhost:4200'}))
app.use(express.urlencoded({extended: false}))
app.use(myConnection)
//Routes
app.use('/urbentory', router)


//Server
http.createServer(app).listen(app.get('port'), function (err) {
  if (err) return console.log(`Error al conectar con el servidor: ${err}`)

  console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
})