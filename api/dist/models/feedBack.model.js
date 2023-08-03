"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedBackModel = void 0;
const mongoose_1 = require("mongoose");
const feedBack = new mongoose_1.Schema({
    theme: { type: String, required: true },
    details: { type: String, required: true },
});
exports.FeedBackModel = (0, mongoose_1.model)("FeedBacks", feedBack);
//# sourceMappingURL=feedBack.model.js.map