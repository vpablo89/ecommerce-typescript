import { IUser } from '@/types';
import { Request, Response, NextFunction} from 'express';


const authorization = (permission: string) =>
    {
        return async(req: Request, res: Response, next: NextFunction) =>
        {
            const user: IUser = req.user as IUser;
    
            if(!user.isAdmin && !user.role.permissions.includes(permission))
            {
                return res.status(401).send({ message: 'Not authorization!'});
            }
    
            next();
        }
    }
    
    export default authorization;