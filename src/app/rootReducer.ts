import { combineReducers } from "@reduxjs/toolkit";
import containerCards, {
  ContainerCardsStore,
} from "../components/ContainerCards/ContainerCards.slice";
// export type RootState = ReturnType<typeof rootReducer>;
export interface RootState extends ContainerCardsStore {}

const rootReducer = combineReducers<RootState>({
  containerCards,
});

export default rootReducer;
