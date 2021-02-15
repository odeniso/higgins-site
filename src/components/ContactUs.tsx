import * as React from "react";
import { css } from "@emotion/react";
import { copy, fonts, theme } from "../params";

import dogIllustration from "../illustrations/dog-petting-badge-70.svg";
import { mediaQs } from "../mediaQueries";

export const ContactUs = ({
  className = "",
  id = "",
}: {
  className?: string;
  id?: string;
}) => (
  <div
    css={css`
      height: 200px;
      display: flex;
      background-color: ${theme.primaryColor};
      background-image: url(${dogIllustration});
      background-size: 80%;
      background-position: center;
      background-repeat: no-repeat;
      justify-content: center;
      align-items: center;
      ${mediaQs.isMinLarge} {
        height: 400px;
        background-size: 60%;
      }
      ${mediaQs.isMinHuge} {
        height: 568px;
        background-size: 60%;
      }
    `}
    className={className}
    id={id}
  >
    <div
      css={css`
        display: flex;
        font-family: ${fonts.serif};
        align-items: center;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          font-size: 32px;
          font-weight: 300;
          margin-bottom: 17px;
          color: #fff;
          text-align: center;
          ${mediaQs.isMinLarge} {
            font-size: 48px;
          }
          ${mediaQs.isMinHuge} {
            font-size: 60px;
          }
        `}
      >
        {copy.contactUs.header}
      </div>
      <div>
        <a
          css={css`
            font-size: 16px;
            text-decoration: none;
            color: #fff;
            ${mediaQs.isMinLarge} {
              font-size: 28px;
            }
            ${mediaQs.isMinHuge} {
              font-size: 36px;
            }
          `}
          href="mailto:hallo@higginsfriends.com"
        >
          hallo@higginsfriends.com
        </a>
      </div>
    </div>
  </div>
);
