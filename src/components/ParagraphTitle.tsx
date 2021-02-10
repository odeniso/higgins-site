import * as React from "react";
import { css } from "@emotion/react";
import { colors } from "../params";
import { mediaQs } from "../mediaQueries";

export const ParagraphTitle: React.FunctionComponent<{
  className?: string;
}> = ({ className = "", children }) => (
  <div
    css={css`
      font-family: "Cheltenham";
      font-weight: 300;
      font-size: 36px;
      margin-bottom: 20px;
      color: ${colors.stromboli};
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
