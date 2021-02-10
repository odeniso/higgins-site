import * as React from "react";

import { css } from "@emotion/react";

import { margins, gutters } from "../params";
import { mediaQs } from "../mediaQueries";
import { TinyArticle } from "./TinyArticle";

const ProductInfo = ({
  className = "",
  id = "",
}: {
  className?: string;
  id?: string;
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
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
        margin: 0 ${margins.side};
        margin-bottom: 40px;
        ${mediaQs.isMinLarge} {
          margin: 0;
          margin-right: ${gutters.minLarge};
        }
      `}
    >
      <div
        css={css`
          ${mediaQs.isMinLarge} {
            margin-left: ${margins.sideLarge};
          }
          ${mediaQs.isMinHuge} {
            margin-left: ${margins.sideHuge};
          }
        `}
      >
        <TinyArticle
          tinyTitle="DOG FOOD"
          title={"All your dog needs. All About the product"}
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
    <div
      css={css`
        flex: 1;
      `}
    >
      <div
        css={css`
          height: 201px;
          max-width: 100%;
          background: black;
          ${mediaQs.isMinLarge} {
            margin-left: 128px;
            margin-right: ${margins.sideLarge};
            height: 100%;
          }
          ${mediaQs.isMinHuge} {
            margin-right: ${margins.sideHuge};
          }
        `}
      >
        HAI
      </div>
    </div>
  </div>
);

export default ProductInfo;
