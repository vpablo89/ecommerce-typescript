import z from 'zod'

const createProductValidation = z.object({
    title: z.string().min(5).max(50),
    description: z.string().min(5).max(255),
    code: z.string().min(5).max(10),
    price: z.number(),
    status: z.boolean().default(true),
    stock: z.number(),
    category: z.string(),
    thumbnail: z.string(),
})

export default createProductValidation