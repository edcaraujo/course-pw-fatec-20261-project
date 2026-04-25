import { Request, Response, NextFunction } from "express";

function loginWithBasicAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({error: "Autenticação inválida!"});
        return;
    }

    const [authType, authValue] = authHeader.split(' ');

    if (authType != "Basic" || !authType) {
        res.status(401).json({error: "Autenticação inválida!"});
        return; 
    }

    if (!authValue) {
        res.status(401).json({error: "Autenticação inválida!"});
        return; 
    }

    const authCredential = Buffer.from(authValue, "base64").toString('utf8');

    const [authUser, authPass] = authCredential.split(':');

}

export default {
    loginWithBasicAuth
}