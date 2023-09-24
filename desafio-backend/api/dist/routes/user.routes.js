"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const credentials_middleware_1 = __importDefault(require("../middlewares/credentials.middleware"));
class UserRouter {
    router;
    controller;
    auth;
    crendentials;
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new user_controller_1.default();
        this.auth = new auth_middleware_1.default();
        this.crendentials = new credentials_middleware_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post('/register', this.crendentials.validateCredentials, this.controller.register.bind(this.controller));
        this.router.get('/login/userLoggedId', this.auth.validateJWT, this.controller.login.bind(this.controller));
        this.router.post('/login', this.crendentials.validateCredentials, this.controller.login.bind(this.controller));
    }
}
exports.default = UserRouter;
