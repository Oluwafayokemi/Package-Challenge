"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileExists = void 0;
var fs_1 = __importDefault(require("fs"));
var fileExists = function (file) {
    try {
        fs_1.default.accessSync(file, fs_1.default.constants.R_OK | fs_1.default.constants.W_OK);
        return true;
    }
    catch (err) {
        return false;
    }
};
exports.fileExists = fileExists;
