import express, { Express } from "express";
import dotenv from "dotenv"
dotenv.config();

import { setupExpressApp } from "./src/expressSetup";
import { connectToDB } from "./src/mongoSetup";


function startServer() {
    const app: Express = express();

    setupExpressApp(app);
    connectToDB();
}

startServer();