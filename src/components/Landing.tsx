import * as React from "react";

import { css } from "@emotion/react";

import colors from "../colors";
import DogPic from "../images/dog2x.png";

const margin = "160px";

const Landing = ({ className = "" }: { className?: string }) => (
  <div
    css={css`
      display: flex;
      column-gap: 24px;
    `}
    className={className}
  >
    <div
      css={css`
        flex: 1;
        font-family: "Cheltenham";
        padding-top: 56px;
        color: ${colors.stromboli};
        margin-left: ${margin};
        justify-content: start;
      `}
    >
      <h1
        css={css`
          font-size: 140px;
          margin: 0;
          margin-bottom: 48px;
        `}
      >
        All Natural Dog Food
      </h1>
      <div
        css={css`
          font-size: 36px;
        `}
      >
        Get the best dog food around right here
      </div>
    </div>
    <div
      css={css`
        flex: 1;
        display: flex;
        justify-content: end;
        margin-right: ${margin};
        align-items: center;
      `}
    >
      <img
        src={DogPic}
        css={css`
          max-width: 100%;
        `}
      />
    </div>
  </div>
);

export default Landing;
