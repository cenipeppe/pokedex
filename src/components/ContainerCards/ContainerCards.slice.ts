/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPokemons, ItemType } from "../../api";
import { AppDispatch, AppThunk } from "../../app/store";

export interface ContainerCardsState {
  pokemons: ItemType[];
  loading: boolean;
}

export interface ContainerCardsStore {
  containerCards: ContainerCardsState;
}

const initialState: ContainerCardsState = {
  pokemons: [],
  loading: false,
};

const ContainerCardsSlice = createSlice({
  name: "containerCards",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<ItemType[]>) => {
      state.pokemons = action.payload;
    },
    setPokemonsLoading: (state, action: PayloadAction<boolean>) => {
      state.pokemons = action.payload ? [] : state.pokemons;
      state.loading = action.payload;
    },
  },
});

export const { setPokemons, setPokemonsLoading } = ContainerCardsSlice.actions;

export const loadPokemons =
  (start?: number): AppThunk =>
  async (dispatch: AppDispatch) => {
    const pokemons = await getPokemons(start || 0);
    dispatch(ContainerCardsSlice.actions.setPokemons(pokemons));
    dispatch(ContainerCardsSlice.actions.setPokemonsLoading(false));
  };

export default ContainerCardsSlice.reducer;
