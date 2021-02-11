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
      ${mediaQs.isMinLarge} {
        margin-left: 0;
        margin-right: 0;
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
        margin-bottom: 24px;
        font-family: "Cheltenham";
        ${mediaQs.isMinLarge} {
          padding-top: 5%;
          margin-bottom: 0;
          margin-right: 24px;
          display: block;
          margin-left: ${margins.sideLarge};
          color: ${colors.stromboli};
          flex: 1;
        }
        ${mediaQs.isMinHuge} {
          margin-left: ${marginHuge};
        }
      `}
    >
      <h1
        css={css`
          font-size: 42px;
          text-align: center;
          ${mediaQs.isMinLarge} {
            font-size: 92px;
            margin-bottom: 40px;
            text-align: left;
          }
          ${mediaQs.isMinHuge} {
            margin-bottom: 48px;
            font-size: 140px;
          }
          margin: 0;
        `}
      >
        So wie's sein soll
      </h1>
      <div
        css={css`
          display: none;
          ${mediaQs.isMinLarge} {
            font-size: 24px;
            display: block;
          }
          ${mediaQs.isMinHuge} {
            font-size: 36px;
          }
        `}
      >
        Endlich wertvolles Hundefutter
      </div>
    </div>
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        ${mediaQs.isMinLarge} {
          flex: 1;
          justify-content: flex-end;
          margin-right: ${margins.sideLarge};
        }
        ${mediaQs.isMinHuge} {
          margin-right: ${marginHuge};
        }
      `}
    >
      <div>
        <img
          src={DogPic}
          css={css`
            max-width: 100%;
          `}
        />
      </div>
    </div>
  </div>
);

export default Landing;
