import { z } from "zod";

export const ContactSchema = z.object({
    subject : z.string().min(1,"Subject title is required"), 
    email : z.string().email(), 
    message : z.string().min(1,"Please enter your message")
})

export type ContactPayload = z.infer<typeof ContactSchema>