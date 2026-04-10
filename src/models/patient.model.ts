import { z } from "zod";

export const patientSchema = z.object({
    uuid: z.string().uuid({ message: "Formato de UUID inválido" }),
    name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Endereço de e-mail inválido" }),
    birthDate: z.coerce.date({ message: "Data de nascimento inválida" }),
});

export const updatePatientSchema = patientSchema.partial().omit({ uuid: true });

export type PatientInput = z.infer<typeof patientSchema>;

export interface Patient extends PatientInput {}
