const dependencyController = {}

dependencyController.list = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return console.log(`Error Al consultar datos de la BD: ${err}`)


    conn.query('SELECT d.idDependency,d.description as depDescription, m.description as depManagement FROM dependency as d JOIN management as m ON m.IdManagement = d.management_IdManagement ORDER BY depDescription ASC'
    , (err, results) => {
        if (err) return console.log(`Error al consultar la tabla de dependencias: ${err}`)

        res.json(results)
    })
  })
}

dependencyController.add = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return console.log(`Error Al consultar datos de la BD: ${err}`)
    const dependency = req.body
    conn.query('INSERT INTO dependency SET ? ',dependency,(err, results) => {
      if (err) {
        res.status(500).json({"message": "Error al insertar datos en dependencia"})
        return
      }
      res.json({"message": "Departamento/Obra insertado(a) correctamente"})
    })
  })
}

dependencyController.edit = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return console.log(`Error Al consultar datos de la BD: ${err}`)
    const dependency = req.body
    const id = req.body.idDependency
    conn.query('UPDATE dependency SET ? WHERE idDependency = ? ', [dependency, id], (err, results) => {
      if (err) {
        res.status(500).json({
          "message": "Error al actualizar el dato en Departamento/Obra"
        })
        return
      }
      res.json({
        "message": "Departamento/Obra actualizado(a) correctamente"
      })
    })

  })
}

dependencyController.delete = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return console.log(`Error Al consultar datos de la BD: ${err}`)
    const id = req.params.id
    conn.query('DELETE FROM dependency WHERE idDependency = ? ', id, (err, results) => {
      if (err) {
        res.status(500).json({
          "message": "Error al eliminar el dato en Departamento/Obra"
        })
        return
      }
      res.json({
        "message": "Departamento/Obra eliminada correctamente"
      })
    })

  })
}



module.exports = dependencyController
