import * as React from "react";

import { css } from "@emotion/react";

import { margins, theme } from "../params";
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
      flex-direction: column-reverse;
      margin-left: ${margins.side};
      margin-right: ${margins.side};
      padding-bottom: 80px;
      ${mediaQs.isMinLarge} {
        margin-left: 0;
        margin-right: 0;
        flex-direction: row;
        padding-bottom: 0;
      }
    `}
    className={className}
    id={id}
  >
    <div
      css={css`
        align-items: center;
        display: flex;
        justify-content: center;
        margin-bottom: 24px;
        font-family: "Cheltenham";
        flex-direction: column;
        ${mediaQs.isMinLarge} {
          padding-top: 8%;
          flex-direction: row;
          margin-bottom: 0;
          margin-right: 24px;
          display: block;
          margin-left: ${margins.sideLarge};
          color: ${theme.headingColor};
          flex: 1;
        }
        ${mediaQs.isMinHuge} {
          margin-left: ${marginHuge};
        }
      `}
    >
      <div
        css={css`
          color: #000;
          font-family: "Martha";
          text-align: center;
          font-size: 16px;
          ${mediaQs.isMinLarge} {
            color: ${theme.eyebrowTitleColor};
            text-align: left;
            font-size: 24px;
          }
          ${mediaQs.isMinHuge} {
            font-size: 36px;
          }
        `}
      >
        ENDLICH WERTVOLLES HUNDEFUTTER
      </div>
      <h1
        css={css`
          font-size: 42px;
          text-align: center;
          margin: 0;
          margin-top: 24px;
          ${mediaQs.isMinLarge} {
            font-size: 92px;
            margin-bottom: 40px;
            margin-top: 0;
            text-align: left;
          }
          ${mediaQs.isMinHuge} {
            margin-bottom: 48px;
            font-size: 140px;
          }
        `}
      >
        So wie es sein soll
      </h1>
    </div>
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 24px;
        ${mediaQs.isMinLarge} {
          flex: 1;
          justify-content: flex-end;
          margin-right: ${margins.sideLarge};
          margin-bottom: 0;
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
