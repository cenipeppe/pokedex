/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { SingleCard } from "../SingleCard/SingleCard";

interface ContainerCardsProps {
  // pokemons: ItemType[];
}

export const ContainerCards: React.FC<ContainerCardsProps> = () => {
  const pokemons = useSelector(
    (state: RootState) => state.containerCards.pokemons
  );
  const [cards, setCards] = useState(pokemons);
  useEffect(() => {
    setCards(pokemons);
  }, [pokemons]);
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {cards.map((pokemon: any, index: number) => (
        <SingleCard key={index} item={pokemon} />
      ))}
    </div>
  );
};
