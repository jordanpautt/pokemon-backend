import pokemonController from './controller';
import { Router } from 'express';

const router = Router();

router.get('/', pokemonController.readAllPokemon);
router.get('/:id', pokemonController.readOnePokemon);

export default router;
