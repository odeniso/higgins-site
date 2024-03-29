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
      font-family: ${fonts.serif};
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
      font-weight: 400;
      font-size: 36px;
      margin-bottom: 20px;
      color: ${theme.headingColor};
      ${mediaQs.isMinLarge} {
        font-size: 60px;
        max-width: 720px;
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

export const SectionHeading: React.FunctionComponent<{
  title?: string;
  heading: string;
}> = ({ title, heading }) => (
  <div>
    {title && <TinyTitle>{title}</TinyTitle>}
    <ParagraphTitle>{heading}</ParagraphTitle>
  </div>
);
