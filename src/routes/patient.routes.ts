import express from "express";
import { PatientController } from "../controllers/patient.controller";

const router = express.Router();
const patientController = new PatientController();

router.get("/", (req, res) => patientController.getAll(req, res));
router.get("/:uuid", (req, res) => patientController.getByUuid(req, res));
router.post("/", (req, res) => patientController.create(req, res));
router.put("/:uuid", (req, res) => patientController.update(req, res));
router.patch("/:uuid", (req, res) => patientController.update(req, res));
router.delete("/:uuid", (req, res) => patientController.delete(req, res));

export default router;
