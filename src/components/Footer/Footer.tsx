import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <div
      className="footer"
    >
      <div className="flex justify-center items-center gap-4">
        <Link
          to={{ pathname: "https://github.com/cenipeppe/pokedex" }}
          target="_blank"
          className="text-yellow-primary text-4xl"
        >
          <FaGithub />
        </Link>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/giuseppeceniviva/" }}
          target="_blank"
          className="text-yellow-primary text-4xl"
        >
          <FaLinkedin />
        </Link>
      </div>
      <div>
        With this project, I wanted to show my skills using different
        technologies such as <b>React</b>, <b>Typescript</b>,{" "}
        <b>Redux Toolkit</b>, <b>TailwindCss</b>, <b>Ant Design</b> and{" "}
        <b>Axios</b>. Was it necessary to use all these technologies? Not for
        such a small project, I have specifically chosen to take this direction.
      </div>
      <div>
        Made with{" "}
        <Link
          to={{ pathname: "https://pokeapi.co/" }}
          target="_blank"
          className="text-yellow-primary"
        >
          <b>PokeApi</b>
        </Link>
        . Pokémon and Pokémon character names are trademarks of Nintendo.
      </div>
    </div>
  );
};
