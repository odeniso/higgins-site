const colors = {
  alpine: "#B69A30",
  black: "#000",
  cardinal: "#D32427",
  gimblet: "#C3A677",
  stromboli: "#37665D",
};
interface Theme {
  eyebrowTitleColor: string;
  primaryColor: string;
  headingColor: string;
}

const themes: { [name: string]: Theme } = {
  red: {
    eyebrowTitleColor: colors.cardinal,
    primaryColor: colors.cardinal,
    headingColor: colors.gimblet,
  },
  green: {
    eyebrowTitleColor: colors.black,
    primaryColor: colors.stromboli,
    headingColor: colors.stromboli,
  },
  gold: {
    eyebrowTitleColor: colors.black,
    primaryColor: colors.alpine,
    headingColor: colors.stromboli,
  },
};
export const theme = themes.green;

export const margins = { side: "24px", sideLarge: "104px", sideHuge: "160px" };

export const gutters = { minLarge: "24px" };
