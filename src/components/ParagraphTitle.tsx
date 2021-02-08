import * as React from "react";
import { css } from "@emotion/react";
import { colors } from "../params";

export const ParagraphTitle: React.FunctionComponent<{
  className?: string;
}> = ({ className = "", children }) => (
  <div
    css={css`
      font-family: "Cheltenham";
      font-weight: 300;
      font-size: 60px;
      margin-bottom: 40px;
      width: 600px;
      color: ${colors.stromboli};
    `}
    className={className}
  >
    {children}
  </div>
);
