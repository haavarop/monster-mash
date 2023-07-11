import React from "react";
import { Monster } from "../types";
import { Action } from "../App";
import { selectMonsterImage } from "../utils";
import { ChallangeRating } from "../ChallangeRating";
import { Button } from "./Button";
import { FiPlus, FiMinus } from "react-icons/fi";

type Props = {
  count: number;
  monster: Monster;
  dispatch: React.Dispatch<Action>;
};

export const EnocunterCard: React.FC<Props> = ({
  monster,
  dispatch,
  count,
}) => {
  return (
    <div className="flex">
      <img className="w-24" src={selectMonsterImage(monster)} />
      <div className="ml-4">
        <p className="text-3xl">{monster.name}</p>
        <div className="flex">
          <ChallangeRating cr={monster.cr} />
          <div className="ml-4 flex">
            <Button onClick={() => dispatch({ type: "remove", monster })}>
              <FiMinus />
            </Button>
            <p className="text-3xl mx-4">{count}</p>
            <Button onClick={() => dispatch({ type: "add", monster })}>
              <FiPlus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
