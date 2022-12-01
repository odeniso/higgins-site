import * as React from "react";

import { css } from "@emotion/react";

import { mediaQs } from "../mediaQueries";
import { fonts, theme, copy  } from "../params";

import addToMailchimp from 'gatsby-plugin-mailchimp';

const MailchimpForm: React.FunctionComponent<{}> = () => {

  const [email, setEmail] = React.useState('');

  const [subscribed, setSub] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data: any) => {
        setSub('true');
      })
      .catch((error: Error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={"mc-form"}
      css={css`
        margin-bottom: 30px;
      `}
    >
      <div>
        <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
          css={css`
            font-family: Myriad Pro;
            display: inline-block;
            max-width: 100%;
            min-width: 300px;
            height: 40px;
            padding: 0 10px;
            background: #fbf6ec;
            border: none;
            border-radius: 5px;
            color:  #414C3B;
            font-size: 20px;
            font-weight: 400;
          `}
        />
        {
          !subscribed
          ? 
            <button 
              type="submit"
              css={css`
                display: block;
                width: 100%;
                margin-top: 15px;
                margin-left: 0;
                color: #414C3B;
                background: #D0AE23;
                border: none;
                font-size: 20px;
                font-family: 'Myriad Pro';
                height: 40px;
                border-radius: 5px;
                text-transform: uppercase;
                padding: 0 20px;
                cursor: pointer;
                ${mediaQs.isMinLarge} {
                  display: inline-block;
                  width: auto;
                  margin-top: 0;
                  margin-left: 15px;
                }
              `}
            >{copy.contactUs.mailchimpSubmit}</button>
          :
            <span
              css={css`
                display: inline;
                margin-left: 10px;
              `}
            >
            Vielen Dank</span>
        }
      </div>
    </form>
  );
};

export default MailchimpForm;