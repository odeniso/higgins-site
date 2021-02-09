import * as React from "react";

import { css } from "@emotion/react";

import { ParagraphTitle } from "./ParagraphTitle";
import { TinyTitle } from "./TinyTitle";
import { mediaQs } from "../mediaQueries";

export const TinyArticle: React.FunctionComponent<{
  title: string;
  tinyTitle: string;
}> = ({ title, tinyTitle, children }) => (
  <div>
    <TinyTitle>{tinyTitle}</TinyTitle>
    <ParagraphTitle>{title}</ParagraphTitle>
    <div
      css={css`
        font-family: "Cheltenham";
        font-size: 18px;
        ${mediaQs.isMinHuge} {
          font-size: 24px;
        }
      `}
    >
      {children}
    </div>
  </div>
);
