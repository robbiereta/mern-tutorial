const express = require('express')
const router = express.Router()
const {
  getVentas,
  getVenta,
  setVenta,
  updateVenta,
  deleteVenta,
} = require('../controllers/ventaController')

router.route('/').get(getVentas).post(setVenta)
router.route('/:id').get(getVenta)
router.route('/:id').delete(deleteVenta).put(updateVenta)

module.exports = router