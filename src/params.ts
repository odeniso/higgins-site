const colors = {
  alpine: "#B69A30",
  black: "#000",
  buttercup: "#F2BE19",
  cardinal: "#D32427",
  gallery: "#EFEFEF",
  gimblet: "#C3A677",
  stromboli: "#37665D",
  tan: "#CCAA7C",
  white: "#FFFFFF",
};
interface ThemeInfo {
  eyebrowTitleColor: string;
  primaryColor: string;
  headingColor: string;
  secondaryBGColor: string;
  highlightColor: string;
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
    secondaryBGColor: colors.cardinal,
    highlightColor: colors.gimblet,
    name: Theme.Red,
  },
  [Theme.Green]: {
    eyebrowTitleColor: colors.black,
    primaryColor: colors.stromboli,
    headingColor: colors.stromboli,
    secondaryBGColor: colors.gallery,
    highlightColor: colors.tan,
    name: Theme.Green,
  },
  [Theme.Gold]: {
    eyebrowTitleColor: colors.black,
    primaryColor: colors.alpine,
    headingColor: colors.stromboli,
    secondaryBGColor: colors.gallery,
    highlightColor: colors.white,
    name: Theme.Gold,
  },
};

export const fonts = {
  serif: "Cheltenham",
  sansSerif: "Apercu Pro",
  sansSerifTitle: "Apercu Mono Pro",
};

export const theme = themes[Theme.Green];

export const margins = {
  side: "24px",
  sideLarge: "104px",
  sideHuge: "160px",
  vertical: { small: "48px", large: "96px", huge: "144px" },
};

export const gutters = { minLarge: "24px" };

export const copy = {
  aboutUs: {
    title: "UNSERE PHILOSOPHIE",
    header: "Tierwohl statt Tierleid",
    content: `Wir machen Tiernahrung anders. Das zeigt die Nahrungskette: Der Weg unserer Kühe beginnt und endet auf der Weide. Dadurch ersparen wir ihnen lange Touren in fremde Schlachthäuser. Während Wild in kontrollierten Gehegen gehalten werden muss, um einmal als Biofleisch auf dem Markt zu landen, gehen wir einen anderen Weg. Wir verarbeiten Fleisch von Wild, das durch die Jagd umgekommen ist und sein Leben im Wald verbracht hat. Beim Fisch bestehen wir auf nachhaltingem Fang. Durch die Zusammenarbeit mit ausgewählten und gleichgesinnten Bauern stellen wir eine artgerechte Haltung und Verarbeitung sicher - so wie’s sein soll.`,
  },
  productInfo: {
    title: "UNSER FUTTER",
    header: "Natürlich ganz natürlich",
    content: `Higgins & Friends kombiniert regionale Zutaten mit fairen Methoden. Unsere natürliche Rezeptur schmeckt den Vierbeinern. Während Riesenunternehmen Kalorien aus Weizen generieren und Geschmack durch Chemie beimengen, werden bei unserem schonenden Kochverfahren die Vitamine und Mineralstoffe erhalten. Das garantiert auch den vollen Geschmack von echtem Fleisch, Fisch und Gemüse. Eine perfekte Balance von Nährstoffen - so wie’s sein soll.`,
  },
  contactUs: {
    header: "Schreiben Sie uns eine Mail:",
  },
};
