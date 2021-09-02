import React from "react";
import { Progress, Statistic, Tag, Tooltip } from "antd";
import { PokemonType } from "../../api";
import { capitalizeFirstLetter } from "../../utils";

export interface PokemonProps {
  pokemon: PokemonType;
}

const tagColor = "#0B285F";

export const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div className="pokemonContainer">
      <div className="p-4 flex flex-wrap justify-center items-center gap-12 w-full bg-yellow-dirty rounded-t-2xl  lg:px-14">
        <Statistic title="Number" value={`#${pokemon.id}`} />
        <Statistic title="Name" value={capitalizeFirstLetter(pokemon.name)} />
        <Statistic
          title="Type"
          value={pokemon.types
            .map((t) => capitalizeFirstLetter(t.type.name))
            .join(", ")}
        />
        <Statistic title="Weight" value={`${pokemon.weight / 10} kg`} />
        <Statistic title="Height" value={`${pokemon.height / 10} m`} />
        <Statistic value={pokemon.base_experience} title="Base experience" />
      </div>
      <img
        src={pokemon.sprites?.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <div className="progress w-full bg-yellow-dirty p-4 lg:px-14">
        <div className="w-full flex justify-center mb-4">
          <p className="text-2xl text-black">Stats:</p>
        </div>
        {pokemon.stats.map((s, i) => (
          <div
            key={`stat-${pokemon.id}-${i}`}
            className="w-full flex gap-4 p-2"
          >
            <Tag color={tagColor} className="w-28">
              {capitalizeFirstLetter(s.stat.name)}
            </Tag>
            <Progress percent={s.base_stat} showInfo={false} />
          </div>
        ))}
      </div>
      <div className="w-full flex flex-wrap justify-center items-center p-4 lg:px-14">
        <Tooltip title="Normal">
          <img
            src={pokemon.sprites?.front_default}
            alt={`${pokemon.name}_front`}
          />
        </Tooltip>
        <Tooltip title="Shiny">
          <img
            src={pokemon.sprites?.front_shiny}
            alt={`${pokemon.name}_front-shiny`}
          />
        </Tooltip>
      </div>
      {pokemon.game_indices.length > 0 && (
        <div className="w-full bg-yellow-dirty p-4 lg:px-14">
          <div className="w-full flex justify-center mb-4">
            <p className="text-2xl text-black">Appears in:</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-y-2 w-full">
            {pokemon.game_indices.map((g) => (
              <Tag key={`${g.game_index}-${g.version.name}`} color={tagColor}>
                {capitalizeFirstLetter(g.version.name)}
              </Tag>
            ))}
          </div>
        </div>
      )}
      {pokemon.id < 650 && (
        <div className="p-4">
          <img
            src={pokemon.sprites?.other.dream_world.front_default}
            alt={`${pokemon.name} dream_wold`}
          />
        </div>
      )}
      <div className="w-full p-4 bg-yellow-dirty rounded-b-2xl lg:px-14">
        <div className="w-full flex justify-center mb-4">
          <p className="text-2xl text-black">Abilities:</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-y-2 w-full">
          {pokemon.abilities.map((a, i) => (
            <Tag color={tagColor} key={`slot-${a.slot}`}>
              {capitalizeFirstLetter(a.ability.name)}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};
