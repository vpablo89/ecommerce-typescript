import  User  from '@/domain/entities/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const createHash = async (password: string): Promise<string>  => 
    {
        return await bcrypt.hash(password, 10);
    }

export const isValidPassword = async (password: string, passwordHash: string): Promise<boolean> =>  
    {
        return await bcrypt.compare(password, passwordHash);
    } 

export const generateToken = async(user: User):Promise<string>=>
    {
        return new Promise(async (resolve, _reject) => {
        const token: string = await jwt.sign({user: {...user, password: undefined}}, process.env.PRIVATE_KEY || '', {expiresIn: '1h'})
        resolve(token)
    })
    }
   