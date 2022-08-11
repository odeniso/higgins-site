import * as React from "react";

import { css } from "@emotion/react";

import { fonts, margins, theme } from "../params";
import { mediaQs } from "../mediaQueries";
import HigginsPainting from "../images/higgins-painting.png";

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
      ${mediaQs.isMinLarge} {
        margin-left: 0;
        flex-direction: row;
        padding-bottom: 0;
      }
    `}
    className={className}
    id={id}
  >
    <div
      css={css`
        display: flex;
        flex: 1;
        justify-content: center;
      `}
    >
      <div
        css={css`
          align-items: center;
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
          font-family: ${fonts.serif};
          flex-direction: column;
          ${mediaQs.isMinLarge} {
            padding-top: 15%;
            flex-direction: row;
            margin-bottom: 0;
            margin-right: 24px;
            display: block;
            margin-left: ${margins.sideLarge};
            color: ${theme.titleColor};
            flex: 1;
          }
          ${mediaQs.isMinHuge} {
            margin-left: ${marginHuge};
          }
        `}
      >
        <div
          css={css`
            color: ${theme.titleColor};
            font-family: ${fonts.serif};
            text-align: center;
            max-width: 60%;
            font-size: 16px;
            ${mediaQs.isMinLarge} {
              max-width: none;
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
            color: ${theme.titleColor};
            font-family: ${fonts.serif};
            text-align: center;
            line-height: 1;
            margin: 0;
            margin-top: 32px;
            ${mediaQs.isMinLarge} {
              font-size: 92px;
              margin-bottom: 40px;
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
          margin-bottom: 0;
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          margin-right: ${margins.side};
          margin-left: ${margins.side};
          ${mediaQs.isMinLarge} {
            margin-left: 10%;
            margin-right: ${margins.sideLarge};
          }
          ${mediaQs.isMinHuge} {
            margin-right: ${margins.sideHuge};
          }
        `}
      >
        <img
          src={HigginsPainting}
          css={css`
            max-width: 100%;
            border: 15px solid ${theme.primaryColor};
            border-radius: 500px;
            box-sizing: border-box;
          `}
        />
      </div>
    </div>
  </div>
);

export default Landing;
