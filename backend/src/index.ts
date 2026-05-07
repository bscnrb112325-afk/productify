import express from "express";
import cors from "cors";

import { ENV } from "./config/env";
import { clerkMiddleware, clerkClient, requireAuth, getAuth } from '@clerk/express'

const app = express();

app.use(cors({origin:ENV.FRONTEND_URL}));
app.use(express.json());
app.use(clerkMiddleware())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => { 
	res.json({ 
		message:"wellcome to productify API - powered by postgresql,drizzle ORM and kelvin auth",
		endpoints:{
			users:"/api/users",
			products:"/api/products",
			comments:"/api/comments",

		}
	 });
});

app.listen(ENV.PORT, () => {
	console.log("Server is up and running on port:", ENV.PORT);
});