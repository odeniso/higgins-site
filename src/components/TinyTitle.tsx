import * as React from "react";
import { css } from "@emotion/react";

export const TinyTitle: React.FunctionComponent<{
  className?: string;
}> = ({ className = "", children }) => (
  <div
    css={css`
      font-family: "Martha";
      font-size: 18px;
      margin-bottom: 16px;
    `}
    className={className}
  >
    {children}
  </div>
);
