import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// routes
import inwardEntryRoutes from "./routes/inwardEntryRoutes";
import processingRoutes from "./routes/processingRoutes";

function setupExpressApp(app: Express) {

    // Middleware to handle 
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(cors({
        origin: process.env.ADMIN_PANEL,
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        credentials: true,
    }));
    app.use((req, res, next) => {
        //for cookies
        res.setHeader('Access-Control-Allow-Origin', process.env.ADMIN_PANEL);
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, *');
        next();
    });
    
    // req routes
    app.use("/api/inward-entry", inwardEntryRoutes);
    app.use("/api/process", processingRoutes);

    app.get("/", (req, res) => {
        res.send("This magpet server, running successfully! :)");
    });

    app.listen(process.env.PORT || 3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
}

export{
    setupExpressApp,
};
