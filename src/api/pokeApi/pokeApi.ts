import { API } from "..";
import { ItemType, PokemonType } from "./pokeApi.types";

export const getPokemons = async (
  start = 0,
  limit = 20
): Promise<ItemType[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${start}&limit=${limit}`;
  const res = await API(url);
  return res.results;
};

export const getPokemon = (
  input: number | string
): Promise<PokemonType> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
  return API(url);
};
