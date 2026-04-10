import { Patient } from "../models/patient.model";

export class PatientRepository {
    private patients: Patient[] = [];

    async findAll(): Promise<Patient[]> {
        return this.patients;
    }

    async findByUuid(uuid: string): Promise<Patient | undefined> {
        return this.patients.find(patient => patient.uuid === uuid);
    }

    async create(patient: Patient): Promise<Patient> {
        this.patients.push(patient);
        return patient;
    }

    async update(uuid: string, updatedData: Partial<Patient>): Promise<Patient | undefined> {
        const index = this.patients.findIndex(patient => patient.uuid === uuid);
        if (index === -1) return undefined;

        this.patients[index] = { ...this.patients[index], ...updatedData } as Patient;
        return this.patients[index];
    }

    async delete(uuid: string): Promise<boolean> {
        const initialLength = this.patients.length;
        this.patients = this.patients.filter(patient => patient.uuid !== uuid);
        return this.patients.length < initialLength;
    }
}
