import { Response, Request } from "express";

export async function tryCatchMiddleware(_: Request, res: Response, calback: unknown) {
	try {
		const response = await calback;
		res.status(200).send(response);
	} catch (err: unknown) {
		console.log(err);
		res.status(500).send(err);
	}
}