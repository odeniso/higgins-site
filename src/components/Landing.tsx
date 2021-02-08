import * as React from "react";

import { css } from "@emotion/react";

import colors from "../colors";
import DogPic from "../images/dog2x.png";

const Landing = () => (
  <div
    css={css`
      display: flex;
    `}
  >
    <div
      css={css`
        flex: 1;
        font-family: "Cheltenham";
        padding-top: 56px;
        color: ${colors.stromboli};
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
        Get the best dogs food around right here
      </div>
    </div>
    <div
      css={css`
        flex: 1;
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
