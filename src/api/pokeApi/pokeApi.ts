import { API } from "..";
import { ItemType } from "./pokeApi.types";

export const getPokemons = (start = 0, limit = 20): Promise<ItemType[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${start}&limit=${limit}`;
  return API(url);
};
