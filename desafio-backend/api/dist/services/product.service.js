"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismadb_1 = __importDefault(require("../lib/prismadb"));
class ProductService {
    productModel;
    constructor() {
        this.productModel = prismadb_1.default.product;
    }
    async getAll(userId) {
        const productList = await this.productModel.findMany({
            where: {
                createdById: userId,
            },
        });
        if (!productList) {
            throw new Error('No products registered by user');
        }
        return productList;
    }
    async getById(id) {
        const product = await this.productModel.findUnique({
            where: {
                id,
            },
        });
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    }
    async create(product) {
        const createdProduct = await this.productModel.create({
            data: product,
        });
        if (!createdProduct) {
            throw new Error('Product not created');
        }
        return createdProduct;
    }
    async update(id, product) {
        const updatedProduct = await this.productModel.update({
            where: {
                id,
            },
            data: product,
        });
        if (!updatedProduct) {
            throw new Error('Product not updated');
        }
        return updatedProduct;
    }
    async delete(id) {
        const deletedProduct = await this.productModel.delete({
            where: {
                id,
            },
        });
        if (!deletedProduct) {
            throw new Error('Product not deleted');
        }
    }
}
exports.default = ProductService;
