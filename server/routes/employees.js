const express = require('express')

const router = express.Router()

const employeesController = require('../controllers/employees.controller')


router.get('/',employeesController.list)


module.exports = router