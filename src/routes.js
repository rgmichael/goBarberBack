import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.get('/', async (req, res) => {

    return res.json({ teste: 'aaaaaaaaaaaaaaaa' });

});

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // so vale para as rotas definidas abaixo dele

//routes.put('/users', authMiddleware, UserController.update);
routes.put('/users', UserController.update);

export default routes;
