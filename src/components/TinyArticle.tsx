import * as React from "react";

import { css } from "@emotion/react";

import { mediaQs } from "../mediaQueries";
import { fonts, theme } from "../params";
import { SectionHeading } from "./SectionHeading";

export const TinyArticle: React.FunctionComponent<{
  title: string;
  tinyTitle: string;
}> = ({ title, tinyTitle, children }) => (
  <div>
    <SectionHeading title={tinyTitle} heading={title} />
    <div
      css={css`
        color: ${theme.textColor};
        font-family: ${fonts.sansSerif};
        font-size: 15px;
        font-weight: 300;
        ${mediaQs.isMinLarge} {
          font-size: 20px;
        }
        ${mediaQs.isMinHuge} {
          font-size: 24px;
        }
      `}
    >
      {children}
    </div>
  </div>
);
