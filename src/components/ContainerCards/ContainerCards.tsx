/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ItemType } from "../../api";
import { SingleCard } from "../SingleCard/SingleCard";
import { loadPokemons } from "./ContainerCards.slice";

interface ContainerCardsProps {
  pokemons: ItemType[];
  page: number;
}

export const ContainerCards: React.FC<ContainerCardsProps> = ({
  pokemons,
  page,
}) => {
  const dispatch = useDispatch();
  const [cards, setCards] = useState(pokemons);
  useEffect(() => {
    dispatch(loadPokemons());
  }, []);
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
