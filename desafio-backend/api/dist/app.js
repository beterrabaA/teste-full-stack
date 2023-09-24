"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const error_middleware_1 = require("./middlewares/error.middleware");
class App {
    app;
    userRoutes = new user_routes_1.default();
    productRoutes = new product_routes_1.default();
    constructor() {
        this.app = (0, express_1.default)();
        this.configureCors();
        this.middlewaresInitialize();
        this.initialzeRoutes();
        this.interceptionError();
    }
    interceptionError() {
        this.app.use(error_middleware_1.errorMiddleware);
    }
    initialzeRoutes() {
        this.app.use('/user', this.userRoutes.router);
        this.app.use('/product', this.productRoutes.router);
    }
    middlewaresInitialize() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    configureCors() {
        const corsOptions = {
            origin: '*',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
            optionsSuccessStatus: 204,
        };
        this.app.use((0, cors_1.default)(corsOptions));
    }
    listen() {
        const PORT = process.env.API_PORT || 3333;
        this.app.listen(PORT, () => console.log(`server is running on ${PORT}`));
    }
}
exports.default = App;
