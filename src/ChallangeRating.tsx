import React from "react";
import { interpolateRgb, interpolateHcl } from "d3-interpolate";
import { Monster } from "./types";

const MAX = 30;

export const ChallangeRating: React.FC<Pick<Monster, "cr">> = ({ cr }) => {
  const ratingAsColor = interpolateRgb("green", "red")(parseFloat(cr) / MAX);
  return (
    <div
      className="p-2 rounded text-zinc-50 flex items-center"
      style={{ background: ratingAsColor }}
    >
      {cr}
    </div>
  );
};
