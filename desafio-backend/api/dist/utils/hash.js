"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashDecode = exports.hashEncode = void 0;
const crypto_1 = __importDefault(require("crypto"));
const CRYPTO_SALT = process.env.CRYPTO_SALT || 'salt';
const hashEncode = (password) => {
    return crypto_1.default
        .pbkdf2Sync(password, CRYPTO_SALT, 10000, 12, 'sha512') // Ajuste o algoritmo e os parâmetros conforme necessário
        .toString('hex');
};
exports.hashEncode = hashEncode;
const hashDecode = (password, hash) => {
    return (0, exports.hashEncode)(password) === hash;
};
exports.hashDecode = hashDecode;
