import React from "react";
import { Monster } from "../types";
import { ChallangeRating } from "../ChallangeRating";
import { BsFillShieldFill } from "react-icons/bs";
import { Trait } from "./Trait";
import { Action } from "../App";
import { selectMonsterImage } from "../utils";

type Props = {
  monster: Monster;
  dispatch: React.Dispatch<Action>;
  variant: "search" | "encounter";
};

export const MonsterCard: React.FC<Props> = ({ monster, dispatch }) => {
  return (
    <button
      title="Klikk for å legge til"
      onClick={() => dispatch({ type: "add", monster })}
      className="border-2 bg-paper rounded flex-col items-center md:flex-row flex border-red-600	"
    >
      <img
        src={selectMonsterImage(monster)}
        className="max-h-64 md:w-24 rounded"
      />
      <div>
        <div className="mx-4 py-4 flex flex-col md:flex-row">
          <h2 className="text-4xl text-center md:text-left md:text-2xl">
            {monster.name}
          </h2>
          <div className="flex md:ml-4 justify-center">
            <ChallangeRating cr={monster.cr} />
            <div className="flex flex-col ml-2 justify-between">
              <BsFillShieldFill /> {monster.armor_class}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <Trait trait="STR" value={monster.strength} />
          <Trait trait="CON" value={monster.constitution} />
          <Trait trait="DEX" value={monster.dexterity} />
          <Trait trait="INT" value={monster.intelligence} />
          <Trait trait="WIS" value={monster.wisdom} />
          <Trait trait="CHR" value={monster.charisma} />
        </div>
      </div>
    </button>
  );
};
