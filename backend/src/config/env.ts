import * as dotenv from "dotenv";

dotenv.config({quiet: true});

export type Env = {
  PORT: string;
  DB_URL: string;
  DATABASE_URL: string;
  NODE_ENV: string;
  FRONTEND_URL: string | undefined;
  CLERK_PUBLISHABLE_KEY: string | undefined;
  CLERK_SECRET_KEY: string | undefined;
};

export const ENV: Env = {
  PORT: process.env.PORT ?? "4000",
  DB_URL: process.env.DB_URL ?? process.env.DATABASE_URL ?? "",
  DATABASE_URL: process.env.DATABASE_URL ?? process.env.DB_URL ?? "",
  NODE_ENV: process.env.NODE_ENV ?? "development",
  FRONTEND_URL: process.env.FRONTEND_URL,
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
};