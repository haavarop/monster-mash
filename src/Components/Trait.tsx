import React from "react";

type Trait = "STR" | "CON" | "DEX" | "INT" | "WIS" | "CHR";
type Props = {
  trait: Trait;
  value: number;
};

export const Trait: React.FC<Props> = ({ trait, value }) => {
  // subtract 10 from the ability score and then divide the total by 2 (round down)
  const modifier = Math.floor((value - 10) / 2);
  return (
    <div className="flex flex-col justify-center mx-2 text-center">
      <b>{trait}</b>
      <p>
        {value}({modifier >= 0 ? "+" : ""}
        {modifier})
      </p>
    </div>
  );
};
