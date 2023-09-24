"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("../services/product.service"));
class ProductController {
    service;
    constructor() {
        this.service = new product_service_1.default();
    }
    async getAll(req, res) {
        const { userId } = req;
        if (!userId) {
            return res.status(401).json({ message: 'user id empty' });
        }
        try {
            const productList = await this.service.getAll(userId);
            return res.status(200).json(productList);
        }
        catch (error) {
            return res.status(400).json({ error });
        }
    }
    async getById(req, res) {
        const { id } = req.params;
        try {
            const product = await this.service.getById(id);
            return res.status(200).json(product);
        }
        catch (error) {
            return res.status(400).json({ error });
        }
    }
    async create(req, res) {
        const { userId } = req;
        const { name, description, category, price } = req.body;
        if (!userId) {
            return res.status(401).json({ message: 'user id empty' });
        }
        try {
            const bodyProduct = {
                createdById: userId,
                name,
                description,
                category,
                price,
            };
            const newProduct = await this.service.create(bodyProduct);
            return res.status(201).json(newProduct);
        }
        catch (error) {
            return res.status(400).json({ error });
        }
    }
    async update(req, res) {
        const { userId } = req;
        const { id } = req.params;
        const { name, description, category, price } = req.body;
        if (!userId) {
            return res.status(401).json({ message: 'user id empty' });
        }
        try {
            const bodyProduct = {
                createdById: userId,
                name,
                description,
                category,
                price,
            };
            const updatedProduct = await this.service.update(id, bodyProduct);
            return res.status(201).json(updatedProduct);
        }
        catch (error) {
            return res.status(400).json({ error });
        }
    }
    async delete(req, res) {
        const { id } = req.params;
        try {
            await this.service.delete(id);
            return res.status(204).json();
        }
        catch (error) {
            return res.status(400).json({ error });
        }
    }
}
exports.default = ProductController;
