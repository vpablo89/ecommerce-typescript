import z from 'zod'

const createRoleValidation = z.object({
    name: z.string().min(3).max(50),
    permissions: z.array(z.string())
    
})

export default createRoleValidation