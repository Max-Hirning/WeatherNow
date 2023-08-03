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
exports.feedBackController = void 0;
const feedBack_services_1 = require("../services/feedBack.services");
class FeedBackController {
    constructor(feedBackService) {
        this.feedBackService = feedBackService;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.feedBackService.get();
            return (res);
        });
    }
    post(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.feedBackService.post(req.body);
            return (res);
        });
    }
    delete(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.feedBackService.delete(req.params.id);
            return (res);
        });
    }
    getOne(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.feedBackService.getOne(req.params.id);
            return (res);
        });
    }
}
exports.feedBackController = new FeedBackController(new feedBack_services_1.FeedBackServices());
//# sourceMappingURL=feedBack.controller.js.map