const colors = {
  alpine: "#B69A30",
  black: "#000",
  cardinal: "#D32427",
  gimblet: "#C3A677",
  stromboli: "#37665D",
};
interface ThemeInfo {
  eyebrowTitleColor: string;
  primaryColor: string;
  headingColor: string;
  name: Theme;
}

export enum Theme {
  Green = "GREEN",
  Gold = "GOLD",
  Red = "RED",
}

const themes: Record<Theme, ThemeInfo> = {
  [Theme.Red]: {
    eyebrowTitleColor: colors.cardinal,
    primaryColor: colors.cardinal,
    headingColor: colors.gimblet,
    name: Theme.Red,
  },
  [Theme.Green]: {
    eyebrowTitleColor: colors.black,
    primaryColor: colors.stromboli,
    headingColor: colors.stromboli,
    name: Theme.Green,
  },
  [Theme.Gold]: {
    eyebrowTitleColor: colors.black,
    primaryColor: colors.alpine,
    headingColor: colors.stromboli,
    name: Theme.Gold,
  },
};

export const fonts = {
  serif: "Cheltenham",
  sansSerif: "Martha",
};

export const theme = themes[Theme.Green];

export const margins = { side: "24px", sideLarge: "104px", sideHuge: "160px" };

export const gutters = { minLarge: "24px" };
