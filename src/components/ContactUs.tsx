import * as React from "react";
import { css } from "@emotion/react";
import { colors } from "../params";

import dogIllustration from "../illustrations/HigginsRound.svg";

export const ContactUs = ({ className = "" }: { className?: string }) => (
  <div
    css={css`
      display: flex;
      background-color: ${colors.stromboli};
      background-image: url(${dogIllustration});
      background-size: 60%;
      background-position: center;
      background-repeat: no-repeat;
      height: 568px;
      justify-content: center;
      align-items: center;
    `}
    className={className}
  >
    <div
      css={css`
        display: flex;
        font-family: "Cheltenham";
        align-items: center;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          font-weight: 300;
          font-size: 60px;
          margin-bottom: 17px;
          color: #fff;
        `}
      >
        Contact Us
      </div>
      <div>
        <a
          css={css`
            font-size: 36px;
            text-decoration: none;
            color: #fff;
          `}
          href="mailto:hallo@higginsfriends.com"
        >
          hallo@higginsfriends.com
        </a>
      </div>
    </div>
  </div>
);
