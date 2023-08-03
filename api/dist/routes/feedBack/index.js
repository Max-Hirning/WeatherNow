"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedBackRouter = void 0;
const express_1 = require("express");
const feedBack_controller_1 = require("../../controller/feedBack.controller");
const tryCatch_middleware_1 = require("../../middlewares/tryCatch.middleware");
exports.feedBackRouter = (0, express_1.Router)();
exports.feedBackRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, tryCatch_middleware_1.tryCatchMiddleware)(req, res, feedBack_controller_1.feedBackController.get()); }));
exports.feedBackRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, tryCatch_middleware_1.tryCatchMiddleware)(req, res, feedBack_controller_1.feedBackController.post(req)); }));
exports.feedBackRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, tryCatch_middleware_1.tryCatchMiddleware)(req, res, feedBack_controller_1.feedBackController.getOne(req)); }));
exports.feedBackRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () { return (0, tryCatch_middleware_1.tryCatchMiddleware)(req, res, feedBack_controller_1.feedBackController.delete(req)); }));
//# sourceMappingURL=index.js.map