import { theme, Theme } from "../../params";
import goldRed from "./gold-red.png";
import greenYellow from "./green-yellow.png";
import mustardWhite from "./mustard-white.png";
import higginsEggshell from "./higgins-eggshell.png";
import dogsPoem from "./dogs-poem.png";

export const getPackagingImg = (): string => {
  const mapping: Record<Theme, string> = {
    [Theme.Gold]: mustardWhite,
    [Theme.Green]: greenYellow,
    [Theme.Red]: goldRed,
    [Theme.Linen]: higginsEggshell,
    [Theme.Conda]: dogsPoem,
  };
  return mapping[theme.name] || greenYellow;
};
