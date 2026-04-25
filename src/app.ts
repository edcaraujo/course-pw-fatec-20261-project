import express, { Request, Response } from "express";

import logger from "./middlewares/logger.middleware"

import routes from "./routes/index"

const app = express()
app.use(express.json())
app.use(logger.logInConsole)

app.use("/api/v1",routes);

app.get("/status", (req: Request, res: Response) => {
    const status = {
        "status": 'ONLINE',
        "message": 'API is running normally',
        "tinestamp": new Date().toISOString(),
    };

    res.status(200).json(status);
})

app.use((req: Request, res: Response) => {
    const err = {
        error: {
            code: 'NOT_FOUND',
            message: `Endpoint not found at ${req.originalUrl}`
        }
    };

    res.status(404).json(err);
});

export default app;