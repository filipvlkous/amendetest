import z from 'zod';

export const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters' }).max(20,{ message:'Name must be at most 20 characters'}),
    author: z
        .string()
        .min(2, { message: 'Author must be at least 2 characters' }).max(20,{message:'Author must be at most 20 characters'}),
    text: z
        .string()
        .min(5, { message: 'Text must be at least 6 characters long' }).max(100,{message:'Text must be at most 100 characters long'}),
    img: z.string()
})