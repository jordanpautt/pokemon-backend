import axios, { AxiosResponse} from 'axios';
import { IPagination } from '../../domain/interfaces/pagination.interface';

async function get( options:IPagination): Promise<AxiosResponse>{
  const url = options?.url ?? `https://pokeapi.co/api/v2/pokemon?limit=${options?.limit}&offset=${options?.offset}`;
  const data = await axios.get(url);
  return data;
}

export default {
  get,
};