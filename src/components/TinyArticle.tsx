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
        ${mediaQs.isMinHuge} {
          font-size: 24px;
        }
      `}
    >
      {children}
    </div>
  </div>
);
