import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

export const createPatientSchema = z.object({
    uuid: z.string().uuid({ message: "Formato de UUID inválido" }).default(() => uuidv4()),
    name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres" }),
    email: z.string().email({ message: "Endereço de e-mail inválido" }),
    birthDate: z.coerce.date({ message: "Data de nascimento inválida" }),
});

export const updatePatientSchema = createPatientSchema.partial().omit({ uuid: true });

export type PatientInput = z.infer<typeof createPatientSchema>;
export interface Patient extends PatientInput {}
