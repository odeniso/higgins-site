import * as React from "react";

import { css } from "@emotion/react";

import { margins } from "../params";
import { mediaQs } from "../mediaQueries";
import { TinyArticle } from "./TinyArticle";

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
      column-gap: 24px;
      row-gap: 40px;
      flex-direction: column-reverse;
      ${mediaQs.isMinHuge} {
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
      `}
    >
      <div
        css={css`
          height: 266px;
          max-width: 100%;
          background: black;
          ${mediaQs.isMinHuge} {
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
        ${mediaQs.isMinHuge} {
          margin: 0;
        }
      `}
    >
      <div
        css={css`
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
