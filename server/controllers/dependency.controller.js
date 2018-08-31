const dependencyController = {}

dependencyController.list = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return console.log(`Error Al consultar datos de la BD: ${err}`)


    conn.query('SELECT d.idDependency,d.description as depDescription, m.description as depManagement FROM dependency as d JOIN management as m ON m.IdManagement = d.management_IdManagement'
    , (err, results) => {
        if (err) return console.log(`Error al consultar la tabla de dependencias: ${err}`)

        res.json(results)
    })
  })
}


module.exports = dependencyController
