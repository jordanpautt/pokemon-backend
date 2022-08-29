import { IError } from './../../domain/interfaces/error.interface';

export default {
  AxiosError: (err: any):IError=>{
    const error = {
      code    : err.code,
      msg     : err.response.statusText,
      message : err.message,
      status  : err.response.status,
    };
    return error;
  },
  PokemonError: (err: any):IError=>{
    const error = {
      code    : err.code,
      message : err.message,
      status  : err.status,
    };
    return error;
  }
};