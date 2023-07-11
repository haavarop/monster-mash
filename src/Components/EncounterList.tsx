import React, { useState } from "react";
import { Action, State } from "../App";
import { SiMonster } from "react-icons/si";
import { EnocunterCard } from "./EnocunterCard";
import { calculateTotalChallange } from "../utils";
import { GrClose } from "react-icons/gr";
type Props = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const EncounterList: React.FC<Props> = ({ state, dispatch }) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const { totalCr, monsterCount } = calculateTotalChallange(state);
  return (
    <div className="bg-paper flex flex-col items-center overflow-y-scroll px-8 w-full md:w-[40vw] py-2 border border-rounded border-red-600">
      {drawerIsOpen ? (
        <>
          {Object.keys(state.monsters).length === 0 ? (
            <p className="text-2xl">No monsters for you</p>
          ) : (
            <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                <p className="text-2xl">
                  CR: {totalCr}, for {monsterCount} monstre
                </p>
                <button
                  className="bg-transparent ml-2"
                  onClick={() => setDrawerIsOpen(false)}
                >
                  <GrClose />
                </button>
              </div>
              {Object.entries(state.monsters).map(
                ([slug, { monster, count }]) => (
                  <EnocunterCard
                    key={slug}
                    monster={monster}
                    count={count}
                    dispatch={dispatch}
                  />
                )
              )}
            </div>
          )}
        </>
      ) : (
        <button
          className="bg-transparent	w-full flex justify-center"
          onClick={() => setDrawerIsOpen(true)}
        >
          <SiMonster />
        </button>
      )}
    </div>
  );
};
