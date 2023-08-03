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
exports.FeedBackServices = void 0;
const feedBack_model_1 = require("../models/feedBack.model");
class FeedBackServices {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield feedBack_model_1.FeedBackModel.find();
            return (res);
        });
    }
    delete(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield feedBack_model_1.FeedBackModel.deleteOne({ _id });
            return ("Feedback was deleted successfully");
        });
    }
    getOne(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield feedBack_model_1.FeedBackModel.findOne({ _id });
            if (res) {
                return (res);
            }
            else {
                throw "There is no such feedback";
            }
        });
    }
    post(feedBack) {
        return __awaiter(this, void 0, void 0, function* () {
            yield feedBack_model_1.FeedBackModel.create(feedBack);
            return ("Feedback was sent successfully");
        });
    }
}
exports.FeedBackServices = FeedBackServices;
//# sourceMappingURL=feedBack.services.js.map