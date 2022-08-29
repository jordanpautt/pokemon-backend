import pokemonHooks from './pokemon.hooks';
import axiosRequest from '../../modules/axios/axios.module';
import { IPokemonInfo } from './../../domain/interfaces/pokemon.interface';
import { IPagination } from '../../domain/interfaces/pagination.interface';

const readAll = async(parameters: IPagination) :Promise<IPokemonInfo[]> => {
  return await pokemonHooks.buildListPokemon(parameters);
};

const readOne = async (id: number) :Promise<IPokemonInfo> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const { data: pokemonInfo } = await axiosRequest.get({ url });
  return pokemonHooks.pokemonDataParser(pokemonInfo);
};

export default {
  readAll,
  readOne
};