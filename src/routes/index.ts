import express from "express"
import userRoute from "./user.route"
import veiculoRoute from "./veiculo.route"

const route = express.Router();

route.use("/users", userRoute);
route.use("/veiculos", veiculoRoute);

export default route;