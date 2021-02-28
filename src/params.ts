const colors = {
  alpine: "#B69A30",
  black: "#000",
  buttercup: "#F2BE19",
  cabbagePont: "#414C3B",
  cardinal: "#D32427",
  everglade: "#255135",
  gallery: "#EFEFEF",
  gimblet: "#C3A677",
  linen: "#FBF6EC",
  porsche: "#E49D5B",
  stromboli: "#37665D",
  tan: "#CCAA7C",
  white: "#FFFFFF",
};
interface ThemeInfo {
  background: string;
  eyebrowTitleColor: string;
  primaryColor: string;
  headingColor: string;
  secondaryBGColor: string;
  highlightColor: string;
  logoColor: string;
  name: Theme;
  textColor: string;
  titleColor: string;
}

export enum Theme {
  Linen = "LINEN",
  Green = "GREEN",
  Gold = "GOLD",
  Red = "RED",
}

const defaultTheme: ThemeInfo = {
  background: colors.white,
  eyebrowTitleColor: colors.black,
  primaryColor: colors.stromboli,
  headingColor: colors.stromboli,
  secondaryBGColor: colors.gallery,
  highlightColor: colors.tan,
  logoColor: colors.black,
  name: Theme.Green,
  titleColor: colors.stromboli,
  textColor: colors.black,
};

const themes: Record<Theme, ThemeInfo> = {
  [Theme.Red]: {
    ...defaultTheme,
    eyebrowTitleColor: colors.cardinal,
    primaryColor: colors.cardinal,
    headingColor: colors.gimblet,
    secondaryBGColor: colors.cardinal,
    highlightColor: colors.gimblet,
    name: Theme.Red,
    titleColor: colors.gimblet,
  },
  [Theme.Green]: {
    ...defaultTheme,
    eyebrowTitleColor: colors.black,
    primaryColor: colors.stromboli,
    headingColor: colors.stromboli,
    secondaryBGColor: colors.gallery,
    highlightColor: colors.tan,
    name: Theme.Green,
    titleColor: colors.stromboli,
  },
  [Theme.Gold]: {
    ...defaultTheme,
    eyebrowTitleColor: colors.black,
    primaryColor: colors.alpine,
    headingColor: colors.stromboli,
    secondaryBGColor: colors.gallery,
    highlightColor: colors.white,
    name: Theme.Gold,
    titleColor: colors.stromboli,
  },
  [Theme.Linen]: {
    ...defaultTheme,
    background: colors.linen,
    eyebrowTitleColor: colors.porsche,
    primaryColor: colors.cabbagePont,
    headingColor: colors.cabbagePont,
    logoColor: colors.cabbagePont,
    name: Theme.Linen,
    titleColor: colors.cabbagePont,
    textColor: colors.cabbagePont,
  },
};

export const fonts = {
  serif: "Cheltenham",
  sansSerif: "Apercu Pro",
  sansSerifTitle: "Apercu Mono Pro",
};

export const theme = themes[Theme.Linen];

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
    content: `Wir machen Tiernahrung anders. Das zeigt die Nahrungskette: Der Weg unserer Kühe beginnt und endet auf der Weide. Dadurch ersparen wir ihnen lange Touren in fremde Schlachthäuser. Während Wild in kontrollierten Gehegen gehalten werden muss, um einmal als Biofleisch auf dem Markt zu landen, gehen wir einen anderen Weg. Wir verarbeiten Fleisch von Wild, das korrekt gejagt wurde und sein Leben im Wald verbracht hat. Beim Fisch bestehen wir auf nachhaltingem Fang. Durch die Zusammenarbeit mit ausgewählten und gleichgesinnten Bauern stellen wir eine artgerechte Haltung und Verarbeitung sicher - so wie’s sein soll.`,
  },
  productInfo: {
    title: "UNSER FUTTER",
    header: "Natürlich ganz natürlich",
    content: `Higgins & Friends kombiniert regionale Zutaten mit fairen Methoden. Unsere natürliche Rezeptur schmeckt den Vierbeinern. Viele Hersteller generieren Kalorien aus Weizen und mengen Geschmack durch Chemie bei. Oder versprechen ihren Kunden „kein Weizen“, weichen dann aber auf Kichererbsen oder Mais aus. Wir verzichten auf unnötige Kalorien und Geschmackszusätze und machen keine falschen Versprechen. Higgins & Friends verwendet ausschließlich Buchweizenmehl, das für eine gute Verdauung sorgt. Und durch unser schonendes Kochverfahren bleiben Vitamine und Mineralstoffe erhalten. Das garantiert auch den vollen Geschmack von echtem Fleisch, Fisch und Gemüse. Eine perfekte Balance von Nährstoffen - so wie’s sein soll.`,
  },
  contactUs: {
    header: "Schreiben Sie uns eine Mail:",
  },
};
