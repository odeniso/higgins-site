import * as React from "react";

import { css } from "@emotion/react";

import { margins } from "../params";
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
        margin: 0 ${margins.side};
        margin-bottom: 40px;
        ${mediaQs.isMinHuge} {
          margin: 0;
          margin-right: 24px;
        }
      `}
    >
      <div
        css={css`
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
          ${mediaQs.isMinHuge} {
            margin-left: 128px;
            margin-right: ${margins.sideHuge};
            height: 100%;
          }
        `}
      >
        HAI
      </div>
    </div>
  </div>
);

export default ProductInfo;
