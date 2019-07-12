import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

import { promisify } from 'util';

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    console.log(authHeader);

    if (!authHeader) {
        return res.status(401).json({ error: 'token nao informado' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);

        console.log(decoded);

        req.userId = decoded.id;

        return next();

    } catch (err) {
        return res.status(401).json({ error: 'token inválido' });
    }


}