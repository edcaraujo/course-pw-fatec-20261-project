import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Getting user list..." });
});

router.get("/:id", (req: Request, res: Response) => {
    res.status(200).json({ message: `Getting user '${req.params.id}'...` });
});

router.post("/", (req: Request, res: Response) => {
    res.status(201).json({ message: "User created successfully." });
});

router.put("/:id", (req: Request, res: Response) => {
    res.status(200).json({ message: `User '${req.params.id}' updated successfully.` });
});

router.patch("/:id", (req: Request, res: Response) => {
    res.status(200).json({ message: `User '${req.params.id}' updated successfully.` });
});

router.delete("/:id", (req: Request, res: Response) => {
    res.status(200).json({ message: `User '${req.params.id}' deleted successfully.` });
});

export default router;