import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const auth = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ message: 'Empty authentication header!' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const data = await jwt.verify(token, process.env.PRIVATE_KEY || '') as JwtPayload;
        req.user = data?.user;
        next();
    } catch (error) {
        return res.status(403).send({ error: 'Authentication error' });
    }
    return
};

export default auth;