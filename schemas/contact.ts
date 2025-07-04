import z from "zod";

export const ContactSchema = z.object({
  email: z.string().email(),
  message: z
    .string()
    .max(500, { message: "Message cannot be longer than 500 characters" }),
});

export type ContactPayload = z.infer<typeof ContactSchema>;
