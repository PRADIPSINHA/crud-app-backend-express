const express = require("express")
const router = express.Router()
const Product = require('../models/product.model.js')
const {getProduct, getProductById, createProduct, updateProduct, deleteProduct} = require('../controller/product.controller.js')


router.get('/', getProduct)
router.get('/:id', getProductById)

router.post('/', createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)


module.exports = router