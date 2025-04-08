import { Router } from 'express'
import productController from '../controllers/product.controller'

const employeeRouter = Router()

employeeRouter.get('/', productController.getAllProducts)
employeeRouter.get('/:id', productController.getProductById)
employeeRouter.post('/', productController.addProduct)
employeeRouter.put('/:id', productController.updateProductById)
employeeRouter.delete('/:id', productController.deleteProductById)

export default employeeRouter