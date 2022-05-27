const express = require('express')
const router = express.Router()
const {
  getVentas,
  getVenta,
  setVenta,
  updateVenta,
  deleteVenta,
} = require('../controllers/ventaController')
const { protect } = require('../middleware/authMiddleware')
router.route('/').get(protect,getVentas).post(protect,setVenta)
router.route('/:id').get(protect,getVenta)
router.route('/:id').delete(protect,deleteVenta).put(protect,updateVenta)

module.exports = router