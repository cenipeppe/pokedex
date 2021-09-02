import React from "react";
import { PokemonType } from "../../api";

export interface PokemonProps {
  pokemon: PokemonType;
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div
      className="w-full h-full bg-yellow-primary border-4 border-yellow-dirty
     rounded-3xl flex flex-wrap justify-between items-center"
    >
      <div className="p-4 flex flex-col gap-2">
        <div>
          <b>Number:</b> <span>#{pokemon.id}</span>
        </div>
        <div>
          <b>Name:</b> <span>{pokemon.name.toUpperCase()}</span>
        </div>
        <div>
          <b>Type:</b>{" "}
          <span>
            {pokemon.types.map((t, index) => (
              <span key={`${index}-${t.type.name}`}>{`${index > 0 && ", "}${
                t.type.name
              }`}</span>
            ))}
          </span>
        </div>
        <div>
          <b>Weight:</b> <span>{pokemon.weight / 10} kg</span>
        </div>
        <div>
          <b>Height:</b> <span>{pokemon.height / 10} m</span>
        </div>
        <div>
          <b>Order:</b> <span>{pokemon.order}</span>
        </div>
        {/* <div>
          <b>Other:</b> <span>{pokemon.stats.map(s => <span className="mx-2">{s.base_stat}</span>)}</span>
        </div> */}
      </div>
      <img
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
    </div>
  );
};
