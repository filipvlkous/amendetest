import z from 'zod';

export const formSchema = z.object({
    name: z
        .string().refine((value) => {
            return value.length === 0 || (value.length >= 2 && value.length <= 20)}),
    author: z
        .string()
        .refine((value) => {
            return value.length === 0 || (value.length >= 2 && value.length <= 20)}),
    text: z
        .string()
        .refine((value) => {
            return value.length === 0 || (value.length >= 5 && value.length <= 500)}),
    img: z.string().optional()
})