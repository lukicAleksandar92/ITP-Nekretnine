"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApi = void 0;
const express_1 = __importStar(require("express"));
const tsoa_1 = require("tsoa");
const routes_1 = require("./tsoa/generated/routes");
const cors_1 = __importDefault(require("cors"));
function initApi() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json({ limit: "10mb" }));
    app.use((0, express_1.urlencoded)({ extended: true }));
    app.use((0, express_1.json)());
    app.use((0, cors_1.default)());
    (0, routes_1.RegisterRoutes)(app);
    const port = 5000;
    app.listen(port, () => {
        console.log(`Aplikacija slusa na http://localhost:${port}`);
    });
    app.use(function errorHandler(err, req, res, next) {
        if (err instanceof tsoa_1.ValidateError) {
            console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
            return res.status(422).json({
                message: "Validation Failed",
                details: err === null || err === void 0 ? void 0 : err.fields,
            });
        }
        if (err instanceof Error) {
            return res.status(500).json({
                message: "Internal Server Error",
            });
        }
        next();
    });
}
exports.initApi = initApi;
//# sourceMappingURL=initApi.js.map