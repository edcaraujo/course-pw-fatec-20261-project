import express from "express"

import userRoutes from "./user.routes"
import patientRoutes from "./patient.routes"

const router = express.Router();

router.use("/users", userRoutes);
router.use("/patients", patientRoutes);

export default router;