import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";


dotenv.config({path:"src/.env"});


export const checkJwtToken = (req: Request, res: Response, next: NextFunction) => {

    // Get the Authorization header
    const authHeader = req.headers.authorization;

    // Check if the header exists and has the Bearer scheme
    if (authHeader && authHeader.startsWith('Bearer ')) {
        // Extract the token from the header
        const token = authHeader.split(' ')[1];

        // Verify the token or perform any other validation logic
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET as string );
            // Token is valid, you can access the decoded information if needed
            (req as any).decodedUser = decoded; // Attach the decoded information to the request object
            next();
        } catch (err) {
            // Token is invalid or expired
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        // No token found in the header
        res.status(401).json({ message: 'Missing token' });
    }
}


