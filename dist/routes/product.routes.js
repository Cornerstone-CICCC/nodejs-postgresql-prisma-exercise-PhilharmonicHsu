"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const employeeRouter = (0, express_1.Router)();
employeeRouter.get('/', product_controller_1.default.getAllProducts);
employeeRouter.get('/:id', product_controller_1.default.getProductById);
employeeRouter.post('/', product_controller_1.default.addProduct);
employeeRouter.put('/:id', product_controller_1.default.updateProductById);
employeeRouter.delete('/:id', product_controller_1.default.deleteProductById);
exports.default = employeeRouter;
