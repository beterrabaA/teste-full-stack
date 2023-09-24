"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../utils/token");
const user_service_1 = __importDefault(require("../services/user.service"));
class TokenValidator {
    service;
    constructor() {
        this.service = new user_service_1.default();
    }
    validateJWT = async (req, res, next) => {
        const token = req.headers.authorization;
        if (!token)
            return res.status(401).json({ message: 'Token not found' });
        try {
            const decoded = (0, token_1.tokenDecoder)(token);
            const loggedUser = await this.service.getUserById(decoded.id);
            if (!loggedUser) {
                return res.status(401).json({ message: 'Token must be a valid token' });
            }
            req.userId = loggedUser.id;
            next();
        }
        catch (error) {
            return res.status(401).json({ message: 'Token must be a valid token' });
        }
    };
}
exports.default = TokenValidator;
