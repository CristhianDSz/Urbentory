const express = require('express')

const router = express.Router()

const managementController = require('../controllers/management.controller')

router.get('/', managementController.list)

module.exports = router