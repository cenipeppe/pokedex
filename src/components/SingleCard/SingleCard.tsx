/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Card from "antd/lib/card";
import Avatar from "antd/lib/avatar/avatar";
import Meta from "antd/lib/card/Meta";
import { ItemType, PokemonType } from "../../api";
import { useEffect } from "react";
import axios from "axios";

export interface SingleCardProps {
  item: ItemType;
}

const capitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const SingleCard: React.FC<SingleCardProps> = ({ item }) => {
  const { url } = item;

  const [pokemon, setPokemon] = useState<PokemonType>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .finally(() => setLoading(false));
  }, []);

  return pokemon ? (
    <Card
    className="w-72 mt-4 bg-yellow-primary border-4 border-yellow-dirty rounded-3xl shadow-lg"
      // style={{ width: 300, marginTop: 16, background: "white" }}
      loading={loading}
      cover={
        <img
          alt={pokemon.name}
          src={pokemon.sprites?.other["official-artwork"].front_default}
        />
      }
    >
      <Meta
        avatar={<Avatar src={pokemon?.sprites?.front_default} />}
        title={`#${pokemon.id} ${capitalizeFirstLetter(pokemon.name)}`}
      />
    </Card>
  ) : (
    <div />
  );
};
