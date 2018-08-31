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

managementController.detail = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return console.log(`Error Al consultar datos de la BD: ${err}`)
    const id = req.params.id
    conn.query(`SELECT * FROM management WHERE idManagement = ${id} `, (err, results) => {
        if (err) return console.log(`Error Al consultar datos de la Gerencia: ${err}`)

        if (results == 0) {
            res.status(404).json({ "message": "Esta gerencia no existe" })  
            return
        } 
        res.json(results)
      })
  })
}

managementController.add = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return console.log(`Error Al consultar datos de la BD: ${err}`)
    const description = req.body
    conn.query('INSERT INTO management SET ? ', description, (err, results) => {
      if (err) {
          res.status(500).json({ "message": "Error al insertar dato en Gerencias" })
          return
      }
      res.json({"message": "Gerencia insertada correctamente"})
    })
  })
}

managementController.edit = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return console.log(`Error Al consultar datos de la BD: ${err}`)
    const management = req.body
    const id = req.body.idManagement
    conn.query('UPDATE management SET ? WHERE idManagement = ? ', [management,id], (err, results) => {
      if (err) {
        res.status(500).json({ "message": "Error al actualizar el dato en Gerencias" })
        return
      }
      res.json({ "message": "Gerencia actualizada correctamente" })
    })

  })
}


managementController.delete = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return console.log(`Error Al consultar datos de la BD: ${err}`)
    const id = req.params.id
    conn.query('DELETE FROM management WHERE idManagement = ? ', id, (err, results) => {
      if (err) {
        res.status(500).json({ "message": "Error al eliminar el dato en Gerencias" })
        return
      }
      res.json({ "message": "Gerencia eliminada correctamente" })
    })

  })
}



module.exports = managementController