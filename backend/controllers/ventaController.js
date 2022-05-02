const asyncHandler = require('express-async-handler')

const ventaModel = require('../models/ventaModel')

// @desc    Get Ventas
// @route   GET /api/Ventas
// @access  Private
const getVentas = asyncHandler(async (req, res) => {
  const ventas = await ventaModel.find()

  res.status(200).json(ventas)
})

// @desc    Get Venta
// @route   GET /api/Ventas/:id
// @access  Private
const getVenta = asyncHandler(async (req, res) => {
  const venta = await  ventaModel.findById(req.params.id)

  if (!venta) {
    res.status(400)
    throw new Error('Venta not found')
  }

  res.status(200).json(venta)
})

// @desc    Set Venta
// @route   POST /api/Ventas
// @access  Private
const setVenta = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const venta = await  ventaModel.create({
    text: req.body.text,
  })

  res.status(200).json(venta)
})

// @desc    Update Venta
// @route   PUT /api/Ventas/:id
// @access  Private
const updateVenta = asyncHandler(async (req, res) => {
  const venta = await  ventaModel.findById(req.params.id)

  if (!venta) {
    res.status(400)
    throw new Error('Venta not found')
  }

  const updatedVenta = await  ventaModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedVenta)
})

// @desc    Delete Venta
// @route   DELETE /api/Ventas/:id
// @access  Private
const deleteVenta = asyncHandler(async (req, res) => {
  const Venta = await  ventaModel.findById(req.params.id)

  if (!Venta) {
    res.status(400)
    throw new Error('Venta not found')
  }

  await  ventaModel.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getVentas,
  getVenta,
  setVenta,
  updateVenta,
  deleteVenta,
}
