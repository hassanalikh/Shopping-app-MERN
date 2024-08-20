import express from 'express';
import asyncHandler from 'express-async-handlr';
import Product from '../models/ProductModel.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("<h1>Node server is runing ...</h1>")
})

//Get ALL PRODUCT ROUTE
router.get('/products', asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products);
})
);

router.get('/products/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' })
    }
})
);


export default router;