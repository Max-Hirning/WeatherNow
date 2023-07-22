import { feedBackRouter } from "./feedBack";
import { Application, Response, Request } from "express";

class AppRouter {
	constructor(private app: Application) {}
	init() {
		this.app.get("/", (_req: Request, res: Response): void => {
			res.send("API Running");
		});
		this.app.use("/api/feedBack", feedBackRouter);
	}
}

export default AppRouter;