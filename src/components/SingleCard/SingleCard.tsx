/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Card from "antd/lib/card";
import Meta from "antd/lib/card/Meta";
import axios from "axios";
import { ItemType, PokemonType } from "../../api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStorePokemon } from "./SingleCard.slice";
import { capitalizeFirstLetter } from "../../utils";
import { Statistic } from "antd";

export interface SingleCardProps {
  item: ItemType;
}

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
    window.scrollTo({ top: 0 });
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
              <div className="ballBottom shadow-xl" />
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
        title={
          <>
            <Statistic
              title="Number"
              value={`#${pokemon.id}`}
              className="mb-2"
            />
            <Statistic
              title="Name"
              value={capitalizeFirstLetter(pokemon.name)}
            />
          </>
        }
      />
    </Card>
  ) : (
    <div />
  );
};
