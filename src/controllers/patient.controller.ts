import { Request, Response } from "express";
import { PatientRepository } from "../repositories/patient.repository";
import { Patient } from "../models/patient.model";

const patientRepository = new PatientRepository();

export class PatientController {
    async getAll(req: Request, res: Response) {
        const patients = await patientRepository.findAll();
        res.status(200).json(patients);
    }

    async getByUuid(req: Request, res: Response) {
        const uuid = req.params.uuid as string;
        const patient = await patientRepository.findByUuid(uuid);
        if (!patient) {
            res.status(404).json({ message: "Patient not found" });
            return;
        }
        res.status(200).json(patient);
    }

    async create(req: Request, res: Response) {
        const { uuid, name, email, birthDate } = req.body;
        const newPatient: Patient = { uuid, name, email, birthDate: new Date(birthDate) };
        await patientRepository.create(newPatient);
        res.status(201).json(newPatient);
    }

    async update(req: Request, res: Response) {
        const uuid = req.params.uuid as string;
        const updatedPatient = await patientRepository.update(uuid, req.body);
        if (!updatedPatient) {
            res.status(404).json({ message: "Patient not found" });
            return;
        }
        res.status(200).json(updatedPatient);
    }

    async delete(req: Request, res: Response) {
        const uuid = req.params.uuid as string;
        const success = await patientRepository.delete(uuid);
        if (!success) {
            res.status(404).json({ message: "Patient not found" });
            return;
        }
        res.status(204).send();
    }
}
