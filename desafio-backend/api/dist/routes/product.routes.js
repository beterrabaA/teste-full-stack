"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
class ProductRouter {
    router;
    controller;
    auth;
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new product_controller_1.default();
        this.auth = new auth_middleware_1.default();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }
    initializeMiddlewares() {
        this.router.use(this.auth.validateJWT);
    }
    initializeRoutes() {
        this.router.get('/', this.controller.getAll.bind(this.controller));
        this.router.get('/:id', this.controller.getById.bind(this.controller));
        this.router.post('/', this.controller.create.bind(this.controller));
        this.router.put('/:id', this.controller.update.bind(this.controller));
        this.router.delete('/:id', this.controller.delete.bind(this.controller));
    }
}
exports.default = ProductRouter;
