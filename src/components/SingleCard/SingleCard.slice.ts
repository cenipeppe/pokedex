/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonType } from "../../api";

export interface SingleCardState {
  pokemon: PokemonType | undefined;
}

export interface SingleCardStore {
  singleCard: SingleCardState;
}

const initialState: SingleCardState = {
  pokemon: undefined,
};

const SingleCardSlice = createSlice({
  name: "singleCard",
  initialState,
  reducers: {
    setStorePokemon: (state, action: PayloadAction<PokemonType | undefined>) => {
      state.pokemon = action.payload;
    },
  },
});

export const { setStorePokemon } = SingleCardSlice.actions;

export default SingleCardSlice.reducer;
