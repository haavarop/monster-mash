import { State } from "./App";
import { Monster } from "./types";

export const selectMonsterImage = (monster: Monster) => {
  if (monster.img_main) return monster.img_main;
  switch (monster.type) {
    case "Humanoid":
      return "/monster_human.png";
    case "Dragon":
      return "/monster_dragon.png";
    default:
      return "/monster_animal.png";
  }
};

export const calculateTotalChallange = ({ monsters }: State) => {
  const initialValue = { monsterCount: 0, crSum: 0 };
  const { monsterCount, crSum } = Object.values(monsters).reduce(
    (acc, curr) => ({
      monsterCount: acc.monsterCount + curr.count,
      crSum: acc.crSum + curr.count * parseFloat(curr.monster.cr),
    }),
    initialValue
  );

  console.log(crSum);

  return { totalCr: crSum, monsterCount };
};
