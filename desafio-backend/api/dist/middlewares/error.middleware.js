"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
function errorMiddleware(err, req, res, next) {
    const { status, message } = err;
    res.status(status).json({ status, message });
}
exports.errorMiddleware = errorMiddleware;
