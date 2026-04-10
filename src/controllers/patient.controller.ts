import { Request, Response } from "express";
import { PatientRepository } from "../repositories/patient.repository";
import { patientSchema, updatePatientSchema, Patient } from "../models/patient.model";
import { z } from "zod";

const patientRepository = new PatientRepository();

export class PatientController {
    async getAll(req: Request, res: Response) {
        const patients = await patientRepository.findAll();
        res.status(200).json(patients);
    }

    async getByUuid(req: Request, res: Response) {
        try {
            const uuid = z.string().uuid().parse(req.params.uuid);
            const patient = await patientRepository.findByUuid(uuid);
            if (!patient) {
                res.status(404).json({ message: "Paciente não encontrado" });
                return;
            }
            res.status(200).json(patient);
        } catch (error) {
            if (error instanceof z.ZodError) {
                res.status(400).json({ error: error.format() });
                return;
            }
            res.status(500).json({ message: "Erro interno do servidor" });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const validatedData = patientSchema.parse(req.body);
            const newPatient = await patientRepository.create(validatedData);
            res.status(201).json(newPatient);
        } catch (error) {
            if (error instanceof z.ZodError) {
                res.status(400).json({ error: error.format() });
                return;
            }
            res.status(500).json({ message: "Erro interno do servidor" });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const uuid = z.string().uuid().parse(req.params.uuid);
            const validatedData = updatePatientSchema.parse(req.body) as Partial<Patient>;
            
            const updatedPatient = await patientRepository.update(uuid, validatedData);
            if (!updatedPatient) {
                res.status(404).json({ message: "Paciente não encontrado" });
                return;
            }
            res.status(200).json(updatedPatient);
        } catch (error) {
            if (error instanceof z.ZodError) {
                res.status(400).json({ error: error.format() });
                return;
            }
            res.status(500).json({ message: "Erro interno do servidor" });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const uuid = z.string().uuid().parse(req.params.uuid);
            const success = await patientRepository.delete(uuid);
            if (!success) {
                res.status(404).json({ message: "Paciente não encontrado" });
                return;
            }
            res.status(204).send();
        } catch (error) {
            if (error instanceof z.ZodError) {
                res.status(400).json({ error: error.format() });
                return;
            }
            res.status(500).json({ message: "Erro interno do servidor" });
        }
    }
}
