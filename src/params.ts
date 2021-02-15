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
  sansSerif: "Apercu Pro",
  sansSerifTitle: "Apercu Mono Pro",
};

export const theme = themes[Theme.Green];

export const margins = { side: "24px", sideLarge: "104px", sideHuge: "160px" };

export const gutters = { minLarge: "24px" };

export const copy = {
  aboutUs: {
    title: "ÜBER UNS",
    header: "Im Einsatz für die Tiere",
    content: `Tiernahrung gibt es genügend. Aber wir machen es anders. Der Weg unserer Kühe beginnt und endet auf der Weide. Wir ersparen ihnen lange Touren durch Europa in fremde Schlachthäuser. Unser Wild lebt im Einklang mit der Natur, im Wald anstatt im Bio-Käfig. Wir stellen artgerechte Haltung und Verarbeitung durch die Zusammenarbeit mit ausgewählten und gleichgesinnten Bauern sicher.`,
  },
  productInfo: {
    title: "UNSER FUTTER",
    header: "Das Beste für den Hund, hergestellt mit großer Verantwortung",
    content: `Higgins & Friends kombiniert regionale Zutaten mit fairen Methoden. Unsere Rezeptur versichert unseren Vierbeinern eine artgerechte Ernährung. Während Riesenunternehmen sich auf Kalorien aus Weizen verlassen, setzen wir auf den vollen Geschmack von echtem Fleisch, Obst und Gemüse der durch ein schonendes Kochverfahren gewährleistet wird.`,
  },
  contactUs: {
    header: "Wir freuen uns auf Ihren Kontakt",
  },
};
