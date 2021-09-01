import { combineReducers } from "@reduxjs/toolkit";
import containerCards, {
  ContainerCardsStore,
} from "../components/ContainerCards/ContainerCards.slice";
import singleCard, {
  SingleCardStore,
} from "../components/SingleCard/SingleCard.slice";
import pages, { PagesStore } from "../pages/Pages.slice";
// export type RootState = ReturnType<typeof rootReducer>;
export interface RootState extends ContainerCardsStore, SingleCardStore, PagesStore {}

const rootReducer = combineReducers<RootState>({
  containerCards,
  singleCard,
  pages,
});

export default rootReducer;
