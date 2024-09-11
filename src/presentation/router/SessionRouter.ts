import { Router } from 'express';
import { login, signup, current } from '../controller/SessionController';
import auth from '../middlewares/auth';

const sessionRouter = Router();

sessionRouter.post('/login', login);
sessionRouter.get('/current', auth, current);
sessionRouter.post('/signup', signup);

export default sessionRouter;
