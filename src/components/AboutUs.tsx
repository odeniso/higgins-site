import * as React from "react";

import { css } from "@emotion/react";

import { margins, gutters } from "../params";
import { mediaQs } from "../mediaQueries";
import { TinyArticle } from "./TinyArticle";

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
          height: 266px;
          max-width: 100%;
          background: black;
          ${mediaQs.isMinLarge} {
            height: 100%;
          }
        `}
      >
        HAI
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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore.
        </TinyArticle>
      </div>
    </div>
  </div>
);

export default AboutUs;
