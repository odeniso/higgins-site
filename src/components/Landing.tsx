import * as React from "react";

import { css } from "@emotion/react";

import { colors, margins } from "../params";
import DogPic from "../images/dog2x.png";
import { mediaQs } from "../mediaQueries";

const margin = margins.side;

const Landing = ({
  className = "",
  id = "",
}: {
  className?: string;
  id?: string;
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      ${mediaQs.isMinHuge} {
        column-gap: 24px;
        flex-direction: row;
      }
    `}
    className={className}
    id={id}
  >
    <div
      css={css`
        display: flex;
        justify-content: center;
        ${mediaQs.isMinHuge} {
          padding-top: 56px;
          display: block;
          margin-left: ${margin};
          color: ${colors.stromboli};
          flex: 1;
          justify-content: start;
        }
        font-family: "Cheltenham";
      `}
    >
      <h1
        css={css`
          ${mediaQs.isMinHuge} {
            font-size: 140px;
            margin-bottom: 48px;
          }
          margin: 0;
        `}
      >
        All Natural Dog Food
      </h1>
      <div
        css={css`
          display: none;
          ${mediaQs.isMinHuge} {
            font-size: 36px;
            display: block;
          }
        `}
      >
        Get the best dog food around right here
      </div>
    </div>
    <div
      css={css`
        flex: 1;
        display: flex;
        align-items: center;
        ${mediaQs.isMinHuge} {
          justify-content: end;
          font-size: 36px;
          margin-right: ${margin};
        }
      `}
    >
      <img
        src={DogPic}
        css={css`
          max-width: 70%;
          maring: auto;
          ${mediaQs.isMinHuge} {
            max-width: 100%;
          }
        `}
      />
    </div>
  </div>
);

export default Landing;
