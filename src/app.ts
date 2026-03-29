import express, { Request, Response } from "express";

import routes from "./routes/index"

const app = express()
app.use(express.json())

app.use("/v1",routes);

app.get("/status", (req: Request, res: Response) => {
    const status = {
        "status": 'ONLINE',
        "message": 'Hello me its me again',
        "uptime": new Date().toISOString(),
    };

    res.status(200).json(status);
})

app.use((req: Request, res: Response) => {
    res.send("API is running...nothing here :(");
});

export default app;