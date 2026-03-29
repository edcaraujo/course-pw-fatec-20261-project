import express, { Request, Response } from "express"

const route = express.Router();

route.get("/",(req: Request, res: Response) => {
    res.send("Obtendo lista de usuários");
});

route.post("/",(req: Request, res: Response) => {
    res.send("Cadastrando um novo usuário.");
});

export default route;