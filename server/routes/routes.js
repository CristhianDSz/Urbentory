const express = require('express')

const router = express.Router()

const managementController = require('../controllers/management.controller')
const employeesController = require('../controllers/employees.controller')


/* Employees */
router.get('/employees',employeesController.list)
/* Managements */
router.get('/management', managementController.list)
router.post('/management', managementController.add)
router.get('/management/:id', managementController.detail)
router.put('/management/:id', managementController.edit)
router.delete('/management/:id', managementController.delete)


module.exports = router