import { Router } from 'express';
import pokemonRoutes from './pokemon/index';
import authRoutes from './auth/index';
import responseError from '../libraries/middlewares/cath-validate';
import jwtValidate from '../libraries/middlewares/jwt-valid';

const router = Router();

router.use('/auth', authRoutes);
router.use(jwtValidate.validateJWT);
router.use('/pokemon', pokemonRoutes);

router.use(responseError);

export default router;
