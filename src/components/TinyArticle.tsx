import * as React from "react";

import { css } from "@emotion/react";

import { mediaQs } from "../mediaQueries";
import { fonts } from "../params";
import { SectionHeading } from "./SectionHeading";

export const TinyArticle: React.FunctionComponent<{
  title: string;
  tinyTitle: string;
}> = ({ title, tinyTitle, children }) => (
  <div>
    <SectionHeading title={tinyTitle} heading={title} />
    <div
      css={css`
        font-family: ${fonts.sansSerif};
        font-size: 18px;
        font-weight: 300;
        ${mediaQs.isMinLarge} {
          font-size: 24px;
        }
        ${mediaQs.isMinHuge} {
          font-size: 28px;
        }
      `}
    >
      {children}
    </div>
  </div>
);
