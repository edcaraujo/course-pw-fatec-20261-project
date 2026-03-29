import express, { Request, Response } from "express"

const route = express.Router();

route.get("/",(req: Request, res: Response) => {
    res.send("Obtendo lista de veiculos");
});

route.post("/",(req: Request, res: Response) => {
    res.send("Cadastrando um novo veiculos.");
});

export default route;