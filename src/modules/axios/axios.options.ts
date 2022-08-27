import axios, { AxiosInstance } from 'axios';
import { IAxiosOption } from '../../domain/interfaces/axios.interfaces';

async function buildAxiosIntans(options: IAxiosOption) {
const {url, ...axiosoptions} = {...options};
  const instance : AxiosInstance= axios.create();
  const { data } = await instance(url);
  return data;  
}

export default buildAxiosIntans;