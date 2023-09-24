"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismadb_1 = __importDefault(require("../lib/prismadb"));
const hash_1 = require("../utils/hash");
class UserService {
    userModel;
    constructor() {
        this.userModel = prismadb_1.default.user;
    }
    async register(username, email, password) {
        console.log(username, email, password);
        const hashedPwd = (0, hash_1.hashEncode)(password);
        console.log(hashedPwd);
        const newUser = await this.userModel.create({
            data: {
                email,
                username,
                password: hashedPwd,
            },
        });
        console.log(newUser);
        return newUser;
    }
    async login(email, password) {
        const user = await this.userModel.findUnique({
            where: {
                email,
            },
        });
        if (!user)
            throw new Error('User not found');
        const vPass = (0, hash_1.hashDecode)(password, user.password);
        if (!vPass)
            throw new Error('Password invalid');
        return user;
    }
    async getUserById(id) {
        const user = await this.userModel.findUnique({
            where: {
                id,
            },
        });
        if (!user)
            throw new Error('User not found');
        return user;
    }
}
exports.default = UserService;
