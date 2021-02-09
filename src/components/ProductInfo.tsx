import * as React from "react";

import { css } from "@emotion/react";

import { margins } from "../params";
import { ParagraphTitle } from "./ParagraphTitle";
import { TinyTitle } from "./TinyTitle";

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
      column-gap: 24px;
      align-items: stretch;
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
          margin-left: ${margins.sideHuge};
        `}
      >
        <TinyTitle>DOG FOOD</TinyTitle>
        <ParagraphTitle>
          {"All your dog needs. All About the product"}
        </ParagraphTitle>
        <div
          css={css`
            font-family: "Cheltenham";
            font-size: 24px;
          `}
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
        </div>
      </div>
    </div>
    <div
      css={css`
        flex: 1;
      `}
    >
      <div
        css={css`
          height: 100%;
          max-width: 100%;
          background: black;
          margin-right: ${margins.sideHuge};
          margin-left: 128px;
        `}
      >
        HAI
      </div>
    </div>
  </div>
);

export default ProductInfo;
