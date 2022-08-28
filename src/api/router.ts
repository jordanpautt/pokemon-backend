import { Router } from 'express';
import pokemonRoutes from './pokemon/index';
import responseError from '../libraries/middlewares/cath-validate';
const router =  Router();

router.use('/pokemon',pokemonRoutes);
router.use(responseError);
export default router;