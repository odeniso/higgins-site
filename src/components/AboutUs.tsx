import * as React from "react";

import { css } from "@emotion/react";

import { margins, gutters } from "../params";
import { mediaQs } from "../mediaQueries";
import { TinyArticle } from "./TinyArticle";

import imagePic from "../images/cow-dogs.png";

const gutterWidthLarge = gutters.minLarge;

const AboutUs = ({
  className = "",
  id = "",
}: {
  className?: string;
  id?: string;
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column-reverse;
      ${mediaQs.isMinLarge} {
        align-items: stretch;
        flex-direction: row;
      }
    `}
    className={className}
    id={id}
  >
    <div
      css={css`
        flex: 1;
        margin-top: 40px;
        ${mediaQs.isMinLarge} {
          margin-top: 0;
          margin-right: ${gutterWidthLarge};
        }
      `}
    >
      <div
        css={css`
          max-width: 100%;
          ${mediaQs.isMinLarge} {
            height: 100%;
          }
        `}
      >
        <img
          src={imagePic}
          css={css`
            max-width: 100%;
          `}
        />
      </div>
    </div>
    <div
      css={css`
        flex: 1;
        margin: 0 ${margins.side};
        ${mediaQs.isMinLarge} {
          margin: 0;
        }
      `}
    >
      <div
        css={css`
          ${mediaQs.isMinLarge} {
            margin-right: ${margins.sideLarge};
          }
          ${mediaQs.isMinHuge} {
            margin-right: ${margins.sideHuge};
          }
        `}
      >
        <TinyArticle
          tinyTitle="WE LOVE DOGS"
          title={"Something general about the brand & food"}
        >
          Tiernahrung gibt es genügend. Aber wir machen es anders. Der Weg
          unserer Kühe beginnt und endet auf der Weide. Wir ersparen ihnen und
          dem Klima lange Touren durch Europa in fremde Schlachthäuser. Und
          unser Wild lebt im Einklang mit der Natur im Wald anstatt im
          Bio-Käfig. Alles sichergestellt durch die Zusammenarbeit mit
          ausgewählten und gleichgesinnten Bauern und besserem Lohn.
        </TinyArticle>
      </div>
    </div>
  </div>
);

export default AboutUs;
