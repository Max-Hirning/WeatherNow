"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const feedBack_1 = require("./feedBack");
class AppRouter {
    constructor(app) {
        this.app = app;
    }
    init() {
        this.app.get("/", (_req, res) => {
            res.send("API Running");
        });
        this.app.use("/api/feedBack", feedBack_1.feedBackRouter);
    }
}
exports.default = AppRouter;
//# sourceMappingURL=index.js.map