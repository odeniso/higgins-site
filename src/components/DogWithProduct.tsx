import * as React from "react";
import { css } from "@emotion/react";
import sittingDaneImg from "../images/sitting-dane.png";
import { theme } from "../params";
import { getPackagingImg } from "../images/packaging";

const boxWidthPercent = 80;
const foregroundOffsetPercent = 100 - boxWidthPercent - 10;

export const DogWithProduct = () => (
  <div
    css={css`
      height: 300px;
      position: relative;
      width: 100%;
    `}
  >
    <div
      css={css`
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: ${theme.primaryColor};
        height: 192px;
        margin-bottom: 32px;
        width: ${boxWidthPercent}%;
        z-index: -1;
      `}
    />
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          height: 100%;
          display: flex;
          position: absolute;
          align-items: flex-end;
          width: ${100 - foregroundOffsetPercent}%;
          left: ${foregroundOffsetPercent}%;
        `}
      >
        <img
          css={css`
            height: 50%;
          `}
          src={getPackagingImg()}
        />
        <img
          css={css`
            height: 100%;
          `}
          src={sittingDaneImg}
        />
      </div>
    </div>
  </div>
);
