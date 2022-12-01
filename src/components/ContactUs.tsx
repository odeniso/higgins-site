import * as React from "react";
import { css } from "@emotion/react";
import { copy, fonts, margins, theme } from "../params";

import { mediaQs } from "../mediaQueries";

import  MailchimpForm from "./MailchimpForm";


export const ContactUs = ({
  className = "",
  id = "",
}: {
  className?: string;
  id?: string;
}) => (
  <div
    css={css`
      min-height: 200px;
      padding: 20px 0;
      display: flex;
      background-color: ${theme.primaryColor};
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
        color: #fff;
        margin: 0 ${margins.side};
      `}
    >
      <div
        css={css`
          font-size: 24px;
          font-weight: 300;
          margin-bottom: 32px;
          color: #fff;
          text-align: center;
          ${mediaQs.isMinLarge} {
            font-size: 32px;
          }
          ${mediaQs.isMinHuge} {
            font-size: 40px;
          }
        `}
      ><a 
        href="https://zmartup.com/campaign/higginsfriends/"
        target="_blank"
        css={css` 
          color: #fff;
          text-decoration: none;
        `}>
        {copy.contactUs.lead}
      </a>
      </div>
      <MailchimpForm />
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
          href="mailto:office@higginsfriends.com"
        >
          office@higginsfriends.com
        </a>
      </div>
    </div>
  </div>
);
