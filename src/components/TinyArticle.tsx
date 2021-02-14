import * as React from "react";

import { css } from "@emotion/react";

import { mediaQs } from "../mediaQueries";
import { fonts, theme } from "../params";

const TinyTitle: React.FunctionComponent<{
  className?: string;
}> = ({ className = "", children }) => (
  <div
    css={css`
      color: ${theme.eyebrowTitleColor};
      font-family: ${fonts.sansSerifTitle};
      font-size: 18px;
      margin-bottom: 12px;
      ${mediaQs.isMinLarge} {
        margin-bottom: 16px;
      }
    `}
    className={className}
  >
    {children}
  </div>
);

const ParagraphTitle: React.FunctionComponent<{
  className?: string;
}> = ({ className = "", children }) => (
  <div
    css={css`
      font-family: ${fonts.serif};
      font-weight: 300;
      font-size: 36px;
      margin-bottom: 20px;
      color: ${theme.headingColor};
      ${mediaQs.isMinLarge} {
        font-size: 60px;
        max-width: 600px;
        margin-bottom: 24px;
      }
      ${mediaQs.isMinHuge} {
        margin-bottom: 40px;
      }
    `}
    className={className}
  >
    {children}
  </div>
);

export const TinyArticle: React.FunctionComponent<{
  title: string;
  tinyTitle: string;
}> = ({ title, tinyTitle, children }) => (
  <div>
    <TinyTitle>{tinyTitle}</TinyTitle>
    <ParagraphTitle>{title}</ParagraphTitle>
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
