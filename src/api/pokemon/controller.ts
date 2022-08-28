import { Request, Response, NextFunction} from 'express';
import pokemonService from './../../service/pokemon/pokemon.service';

const readOnePokemon = async (req: Request,res: Response,  next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await pokemonService.readOne(+id);
    return res.status(201).json({ result });
  } catch (error) {
    return next(error);
  }
};

const readAllPokemon = async (req: Request,res: Response, next: NextFunction) => {
  try {
    const result = await pokemonService.readAll({ limit: 20, offset: 0 });
    return res.status(201).json({ result });
  } catch (error) {
    return next(error);

  }
};

export default {
  readOnePokemon,
  readAllPokemon,
};
