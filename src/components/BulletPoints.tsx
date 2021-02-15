import { css } from "@emotion/react";
import * as React from "react";
import {
  EthicalEmblem,
  NaturalBioEmblem,
  NoCerealEmblem,
  NutritionEmblem,
} from "../illustrations/emblems";
import { mediaQs } from "../mediaQueries";
import { fonts, margins, theme } from "../params";
import { SectionHeading } from "./SectionHeading";

interface BulletPointValues {
  Emblem: React.ComponentType<{ color?: string }>;
  heading: string;
  content: string;
}

const bulletPointsData: BulletPointValues[] = [
  {
    Emblem: EthicalEmblem,
    heading: "Hofschlachtung",
    content: `Unsere Rinder sind alte Milchkühe, die ihr Leben am biozertifizierten Hof und dessen Weide verbracht haben. Genau so endet ihr Weg auch würdevoll.`,
  },
  {
    Emblem: NutritionEmblem,
    heading: "Alleinfutter",
    content: `Hoch qualitative Bio-Inhaltsstoffe und unser Kochverfahren sichern Geschmack und Mineralstoffe.`,
  },
  {
    Emblem: NaturalBioEmblem,
    heading: "Wild aus der Wildnis",
    content: `Wir verarbeiten Wild weiter, nachdem es der gesetzlich vorgeschriebenen Jagd in Forstbetrieben erlegen ist.`,
  },
  {
    Emblem: NoCerealEmblem,
    heading: "Tierischer Anteil von 68%",
    content: `Bei unserem Fleisch verarbeiten wir eine gesunde Mischung an Muskelfleisch, Innereien, Fett, Knorpel und Sehnen.`,
  },
];

const BulletPoint: React.FunctionComponent<BulletPointValues> = ({
  Emblem,
  heading,
  content,
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
  >
    <Emblem
      css={css`
        height: 144px;
      `}
      color={theme.highlightColor}
    />
    <div
      css={css`
        min-height: 55px;
        display: flex;
        flex-direction: column;
        ${mediaQs.isMinLarge} {
          min-height: 88px;
        }
      `}
    >
      <h4
        css={css`
          font-family: ${fonts.sansSerifTitle};
          font-size: 28px;
          ${mediaQs.isMinLarge} {
            font-size: 32px;
          }
          font-weight: 500;
          text-align: center;
        `}
      >
        {heading.toUpperCase()}
      </h4>
    </div>
    <p
      css={css`
        text-align: center;
        font-size: 16px;
        ${mediaQs.isMinLarge} {
          font-size: 20px;
        }
        font-family: ${fonts.sansSerif};
        margin-top: 0;
      `}
    >
      {content}
    </p>
  </div>
);

export const BulletPoints = () => (
  <div
    css={css`
      background-color: ${theme.secondaryBGColor};
      padding: ${margins.vertical.small} ${margins.side};
      ${mediaQs.isMinLarge} {
        padding: ${margins.vertical.large} ${margins.sideLarge};
      }
      ${mediaQs.isMinHuge} {
        padding: ${margins.vertical.huge} ${margins.sideHuge};
      }
    `}
  >
    <SectionHeading heading="Bei uns gibt es" />
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        ${mediaQs.isMinLarge} {
          flex-direction: row;
          & > *:not(:last-child) {
            margin-right: 32px;
          }
        }
      `}
    >
      {bulletPointsData.map((data) => (
        <div
          css={css`
            margin-top: 16px;
            flex: 1;
          `}
        >
          <BulletPoint {...data} />
        </div>
      ))}
    </div>
  </div>
);
