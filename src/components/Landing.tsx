import * as React from "react";

import { css } from "@emotion/react";

import { colors, margins } from "../params";
import DogPic from "../images/dog2x.png";
import { mediaQs } from "../mediaQueries";

const marginHuge = margins.sideHuge;

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
      margin-left: ${margins.side};
      margin-right: ${margins.side};
      row-gap: 24px;
      ${mediaQs.isMinHuge} {
        margin-left: 0;
        margin-right: 0;
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
          margin-left: ${marginHuge};
          color: ${colors.stromboli};
          flex: 1;
          justify-content: flex-start;
        }
        font-family: "Cheltenham";
      `}
    >
      <h1
        css={css`
          font-size: 42px;
          text-align: center;
          ${mediaQs.isMinHuge} {
            font-size: 140px;
            margin-bottom: 48px;
            text-align: left;
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
        justify-content: center;
        ${mediaQs.isMinHuge} {
          justify-content: flex-end;
          font-size: 36px;
          margin-right: ${marginHuge};
        }
      `}
    >
      <img
        src={DogPic}
        css={css`
          max-width: 100%;
          height: auto;
        `}
      />
    </div>
  </div>
);

export default Landing;
