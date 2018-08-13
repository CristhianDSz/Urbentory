const http = require('http')
const express = require('express')
const myConnection = require('./database/connection')

const app = express()

const employeesRoutes = require('./routes/employees')
const managementRoutes = require('./routes/management')

//Settings
app.set('port', process.env.PORT || 3000)




//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(myConnection)
//Routes
app.use('/employees', employeesRoutes)
app.use('/management', managementRoutes)


//Server
http.createServer(app).listen(app.get('port'), function (err) {
  if (err) return console.log(`Error al conectar con el servidor: ${err}`)

  console.log(`Servidor corriendo en el puerto ${app.get('port')}`)
})