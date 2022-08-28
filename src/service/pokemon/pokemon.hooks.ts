/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosRequest from '../../modules/axios/axios.options';
import { IPagination } from '../../domain/interfaces/pagination.interface';
import { IPokemonInfo } from '../../domain/interfaces/pokemon.interface';

const buildListPokemon = async (parameters: IPagination) : Promise<IPokemonInfo[]> => {
  const { data: pokemonList } = await axiosRequest.get(parameters);

  const pokemonParse: Array<IPokemonInfo> = await Promise.all<IPokemonInfo>(
    pokemonList.results.map(async ({ url }:any) => {
        
      const { data: pokemonInfo } = await axiosRequest.get({ url });
      return pokemonDataParser(pokemonInfo);
    })
  );
  return pokemonParse;
};

const pokemonDataParser = (pokemonInfo:any) : IPokemonInfo => {
  const { id, name, sprites, height, weight, abilities, types } = pokemonInfo;
  const abilitiesName = abilities.map((abilitiesData: any) => abilitiesData.ability.name);
  const typesName = types.map((typeData: any) => typeData.type.name);

  return {
    id,
    name,
    abilities : abilitiesName,
    types     : typesName,
    img       : sprites.front_default,
    height,
    weight,
  };
};

export default {
  buildListPokemon,
  pokemonDataParser,
};
