const managementController = {}

managementController.list = (req, res) => {
  req.getConnection((err, conn) => {
      if (err) return console.log(`Error Al consultar datos de la BD: ${err}`)

      conn.query('SELECT * FROM management', (err, results) => {
          if (err) return console.log(`Error Al consultar datos de Gerencias: ${err}`)

          res.json(results)
      })
  })
}


module.exports = managementController