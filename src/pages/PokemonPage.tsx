import { Button, Tooltip } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getPokemon } from "../api";
import { PokemonType } from "../api/pokeApi/pokeApi.types";
import { RootState } from "../app/rootReducer";
import { Loader, LoaderSize } from "../components";
import { Pokemon } from "../components/Pokemon/Pokemon";
import { setStorePokemon } from "../components/SingleCard/SingleCard.slice";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

type PokemonPageParams = {
  id: string;
};

export const PokemonPage: React.FC = () => {
  const { id } = useParams<PokemonPageParams>();
  const [pokemon, setPokemon] = useState<PokemonType | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const pkmn = useSelector((state: RootState) => state.singleCard.pokemon);

  useEffect(() => {
    if (pkmn) {
      setPokemon(pkmn);
    } else {
      setLoading(true);
      getPokemon(id)
        .then((res) => setPokemon(res))
        .finally(() => setLoading(false));
    }
  }, [id, pkmn]);

  const handleBackToHome = () => {
    dispatch(setStorePokemon(undefined));
    history.push("/");
  };
  const handlePrevPokemon = () => {
    if (pkmn) dispatch(setStorePokemon(undefined));
    history.push(`/pokemon/${Number(id) - 1}`);
  };
  const handleNextPokemon = () => {
    if (pkmn) dispatch(setStorePokemon(undefined));
    history.push(`/pokemon/${Number(id) + 1}`);
  };

  return (
    <div className="page">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <Tooltip title="Go to the previous pokemon">
          <Button
            className="bg-blue-light text-yellow-primary shadow-xl"
            onClick={handlePrevPokemon}
            disabled={Number(id) === 1}
          >
            <GiPreviousButton />
          </Button>
        </Tooltip>
        <Button
          className="bg-blue-light text-yellow-primary shadow-xl"
          onClick={handleBackToHome}
        >
          Back to Home
        </Button>
        <Tooltip title="Go to the next pokemon">
          <Button
            className="bg-blue-light text-yellow-primary shadow-xl"
            onClick={handleNextPokemon}
            disabled={Number(id) === 898}
          >
            <GiNextButton />
          </Button>
        </Tooltip>
      </div>
      {pokemon && !loading && <Pokemon pokemon={pokemon} />}
      {loading && <Loader size={LoaderSize.lg} />}
    </div>
  );
};
