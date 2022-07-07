"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loader_1 = __importDefault(require("./loader"));
class AppLoader extends loader_1.default {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '92d4a9bcde5b43669aa7a43e0f326bdf',
        });
    }
}
exports.default = AppLoader;
