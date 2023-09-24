"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
const token_1 = require("../utils/token");
class UserController {
    service;
    constructor() {
        this.service = new user_service_1.default();
    }
    async userLoggedId(req, res) {
        try {
            const { userId } = req;
            return res.json({ userId });
        }
        catch (error) {
            return res.status(400).json({ message: 'user not found' });
        }
    }
    async register(req, res) {
        const { username, email, password } = req.body;
        try {
            const user = await this.service.register(username, email, password);
            return res.status(201).json(user);
        }
        catch (error) {
            return res
                .status(400)
                .json({ message: 'email already in use or password invalid' });
        }
    }
    async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await this.service.login(email, password);
            const token = (0, token_1.tokenGenerator)({
                id: user.id,
                email: user.email,
                password: user.password,
            });
            return res.json({ token });
        }
        catch (error) {
            return res.status(403).json({ message: 'email or password invalid' });
        }
    }
}
exports.default = UserController;
