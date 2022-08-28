export interface IPokemon {
  count: number;
  next: string;
  privious: string | null; 
	results: { name: string; url: string }[];
}
 
export interface IPokemonInfo {
  id: number;
  name: string;
  abilities: string[];
  types: string[];
  img: string;
  height: number;
  weight: number;
}