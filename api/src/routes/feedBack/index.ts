import { Router, Request, Response } from "express";
import { feedBackController } from "../../controller/feedBack.controller";
import { tryCatchMiddleware } from "../../middlewares/tryCatch.middleware";

export const feedBackRouter: Router = Router();

feedBackRouter.get("/", async (req: Request, res: Response) => tryCatchMiddleware(req, res, feedBackController.get()));
feedBackRouter.post("/", async (req: Request, res: Response) => tryCatchMiddleware(req, res, feedBackController.post(req)));
feedBackRouter.get("/:id", async (req: Request, res: Response) => tryCatchMiddleware(req, res, feedBackController.getOne(req)));
feedBackRouter.delete("/:id", async (req: Request, res: Response) => tryCatchMiddleware(req, res, feedBackController.delete(req)));