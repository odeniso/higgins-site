import * as React from "react";

import { css } from "@emotion/react";

import { fonts, margins, theme } from "../params";
import { mediaQs } from "../mediaQueries";
import { DogWithProduct } from "./DogWithProduct";

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
      margin-right: 0;
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
            font-family: ${fonts.sansSerifTitle};
            text-align: center;
            max-width: 60%;
            font-size: 16px;
            ${mediaQs.isMinLarge} {
              color: ${theme.eyebrowTitleColor};
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
        `}
      >
        <DogWithProduct />
      </div>
    </div>
  </div>
);

export default Landing;
