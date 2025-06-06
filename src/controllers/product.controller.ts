import { Request, Response } from 'express'
import { Product } from '@prisma/client'
import productModel from '../models/product.model'

// Get all products
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productModel.fetchAllProducts()

        res.status(200).json(products)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error' })
    }
}

// Get product by id
const getProductById = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const id = Number(req.params.id)
        const product = await productModel.fetchProductById(id)
        if (! product) {
            res.status(404).json({ message: "Product not found" })

            return
        }
        res.status(200).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Unable to fetch product" })
    }
}

// Add new product
const addProduct = async (req: Request<{}, {}, Omit<Product, 'id'>>, res: Response) => {
    try {
        const { productName, price} = req.body
        const product = await productModel.createProduct({
            productName,
            price
        })
    res.status(201).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Unable to add product' })
    }
}

// Update product by id
const updateProductById = async (req: Request<{ id: string }, {}, Partial<Product>>, res: Response) => {
    try {
        const id = Number(req.params.id)
        const { productName, price} = req.body
        const product = await productModel.editProductById(id, {
            productName,
            price
        })
        if (! product) {
            res.status(404).json({ message: "Product not found" })
            return
        }
        res.status(200).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Unable to update product" })
    }
}

// Delete product by id
const deleteProductById = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const id = Number(req.params.id)
        const product = await productModel.removeProductById(id)
        res.status(200).json(product)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Unable to delete product" })
    }
}

export default {
    getAllProducts,
    getProductById,
    addProduct,
    updateProductById,
    deleteProductById
}