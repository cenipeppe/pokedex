/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Card from "antd/lib/card";
import Avatar from "antd/lib/avatar/avatar";
import Meta from "antd/lib/card/Meta";
import axios from "axios";
import { ItemType, PokemonType } from "../../api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStorePokemon } from "./SingleCard.slice";

export interface SingleCardProps {
  item: ItemType;
}

const capitalizeFirstLetter = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const SingleCard: React.FC<SingleCardProps> = ({ item }) => {
  const { url } = item;

  const dispatch = useDispatch();
  const history = useHistory();

  const [pokemon, setPokemon] = useState<PokemonType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [showBall, setShowBall] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .finally(() => setLoading(false));
  }, []);

  const handlePokemonClick = () => {
    dispatch(setStorePokemon(pokemon));
    history.push(`pokemon/${pokemon?.id}`);
  };

  return pokemon ? (
    <Card
      className="card"
      // style={{ width: 300, marginTop: 16, background: "white" }}
      loading={loading}
      onMouseEnter={() => setShowBall(true)}
      onMouseLeave={() => setShowBall(false)}
      onClick={handlePokemonClick}
      cover={
        <div className="relative flex flex-col justify-center items-center">
          {showBall && (
            <>
              <div className="ballTop sha" />
              <div className="ballBottom shadow-lg" />
              <div className="ballCenter" />
            </>
          )}
          <img
            className="z-20"
            alt={pokemon.name}
            src={pokemon.sprites?.other["official-artwork"].front_default}
          />
        </div>
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
