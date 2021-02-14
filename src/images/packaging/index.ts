import { theme, Theme } from "../../params";
import goldRed from "./gold-red.png";
import greenYellow from "./green-yellow.png";
import mustardWhite from "./mustard-white.png";

export const getPackagingImg = (): string => {
  const mapping: Record<Theme, string> = {
    [Theme.Gold]: mustardWhite,
    [Theme.Green]: greenYellow,
    [Theme.Red]: goldRed,
  };
  return mapping[theme.name] || greenYellow;
};
