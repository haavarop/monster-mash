export type Monster = {
  slug: string;
  name: string;
  img_main: string | null;
  cr: string;
  type: "Humanoid" | string;
  armor_class: number;
  hit_points: number;
  intelligence: number;
  charisma: number;
  constitution: number;
  dexterity: number;
  wisdom: number;
  strength: number;
};
